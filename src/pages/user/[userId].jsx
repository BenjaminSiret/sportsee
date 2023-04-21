import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
  fetchUserActivity,
  fetchUserAverageSessions,
  fetchUserPerformance,
  fetchUser
} from "@/services/fetchServices"
import DailyBarChart from "../../components/DailyBarChart/DailyBarChart"
import DurationLineChart from "../../components/DurationLineChart/DurationLineChart"
import PerformanceRadarChart from "../../components/PerformanceRadarChart/PerformanceRadarChart"
import ScoreRadialBarChart from "../../components/ScoreRadialBarChart/ScoreRadialBarChart"
import styles from "./[userId].module.css"

export default function UserPage () {
  const router = useRouter()
  const { userId } = router.query

  const [user, setUser] = useState({})
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])
  const [userPerformance, setUserPerformance] = useState([])

  const [isUserLoading, setIsUserLoading] = useState(true)
  const [isUserActivityLoading, setIsUserActivityLoading] = useState(true)
  const [isUserAverageSessionsLoading, setIsUserAverageSessionsLoading] = useState(true)
  const [isUserPerformanceLoading, setIsUserPerformanceLoading] = useState(true)

  const isLoading = isUserLoading || isUserActivityLoading || isUserAverageSessionsLoading || isUserPerformanceLoading

  useEffect(() => {
    async function fetchData (id) {
      const [user, userActivity, userAverageSessions, userPerformance] = await Promise.all([
        fetchUser(id),
        fetchUserActivity(id),
        fetchUserAverageSessions(id),
        fetchUserPerformance(id)
      ])

      setUser(user)
      setIsUserLoading(false)

      setUserActivity(userActivity)
      setIsUserActivityLoading(false)

      setUserAverageSessions(userAverageSessions)
      setIsUserAverageSessionsLoading(false)

      setUserPerformance(userPerformance)
      setIsUserPerformanceLoading(false)
    }

    if (userId) {
      fetchData(userId)
    }
  }, [userId])

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.greetings}>
              <h1 className={styles.welcome}>
                Bonjour{" "}
                <span className={styles.firstName}>{user.getFirstName()}</span>
              </h1>
              <p className={styles.greetingsText}>
                Félicitations...Vous avez explosé vos objectifs hier 👏
              </p>
            </div>
            <div className={styles.metrics}>
              <div className={styles.charts}>
                <p className={styles.dailyTitle}>Activité quotidienne</p>
                {userActivity.sessions && (
                  <div className={styles.dailyChart}>
                    <DailyBarChart data={userActivity.sessions} />
                  </div>)}
                <div className={styles.smallCharts}>
                  {userAverageSessions.sessions && (
                    <div className={styles.durationChart}>
                      <DurationLineChart data={userAverageSessions.sessions} />
                    </div>
                  )}
                  {userPerformance.data && (
                    <div className={styles.performanceChart} >
                      <PerformanceRadarChart data={userPerformance.data} />
                    </div>
                  )}
                  {user.todayScore && (
                    <div className={styles.scoreChart}>
                      <ScoreRadialBarChart data={user.getTodayScore()} />
                    </div>
                  )}
                </div>
              </div>
              <div className={styles.nutritionStats}></div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
