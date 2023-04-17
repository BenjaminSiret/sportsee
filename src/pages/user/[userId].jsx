import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
  fetchUserFromMock,
  fetchUserFromApi,
  fetchUserActivityFromMock,
  fetchUserActivityFromApi,
  fetchUserAverageSessionsFromApi
} from "@/services/fetchServices"
import DailyBarChart from "../../components/DailyBarChart/DailyBarChart"
import DurationLineChart from "../../components/DurationLineChart/DurationLineChart"
import styles from "./[userId].module.css"

export default function UserPage () {
  const router = useRouter()
  const { userId } = router.query

  const [user, setUser] = useState({})
  const [userActivity, setUserActivity] = useState([])
  const [userAverageSessions, setUserAverageSessions] = useState([])

  const [isUserLoading, setIsUserLoading] = useState(true)
  const [isUserActivityLoading, setIsUserActivityLoading] = useState(true)
  const [isUserAverageSessionsLoading, setIsUserAverageSessionsLoading] = useState(true)

  const isLoading = isUserLoading || isUserActivityLoading || isUserAverageSessionsLoading

  useEffect(() => {
    async function fetchData (id) {
      const [user, userActivity, userAverageSessions] = await Promise.all([
        fetchUserFromApi(id),
        fetchUserActivityFromApi(id),
        fetchUserAverageSessionsFromApi(id)
      ])

      setUser(user)
      setIsUserLoading(false)

      setUserActivity(userActivity)
      setIsUserActivityLoading(false)

      setUserAverageSessions(userAverageSessions)
      setIsUserAverageSessionsLoading(false)
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
                <span className={styles.firstName}>{user.firstName}</span>
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
                  {/* {userAverageSessions.sessions.map((session, index) => {
                    return (
                      <div className={styles.smallChart} key={index}>
                        <p>{session.day} ===  {session.sessionLength}</p>
                      </div>
                    )
                  })} */}
                  {userAverageSessions.sessions && (
                    <div className={styles.durationChart}>
                      <DurationLineChart data={userAverageSessions.sessions} />
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
