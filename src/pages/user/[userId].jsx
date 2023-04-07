import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import {
  fetchUserFromMock,
  fetchUserFromApi,
  fetchUserActivityFromMock,
  fetchUserActivityFromApi,
} from "@/services/fetchServices"
import DailyBarChart from "../../components/DailyBarChart/DailyBarChart"
import styles from "./[userId].module.css"

export default function UserPage () {
  const router = useRouter()
  const { userId } = router.query

  const [user, setUser] = useState({})
  const [userActivity, setUserActivity] = useState([])

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getUser (id) {
      const user = await fetchUserFromApi(id)
      setUser(user)
      setIsLoading(false)
    }

    async function getUserActivity (id) {
      const userActivity = await fetchUserActivityFromApi(id)
      setUserActivity(userActivity)
      setIsLoading(false)
    }

    if (userId) {
      getUser(userId)
      getUserActivity(userId)
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
                {userActivity.sessions && (<DailyBarChart data={userActivity.sessions} />)}
              </div>
              <div className={styles.nutritionStats}></div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
