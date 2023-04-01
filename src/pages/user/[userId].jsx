import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  fetchUserFromMock,
  fetchUserFromApi,
  fetchUserActivityFromMock,
  fetchUserActivityFromApi,
} from "@/services/fetchServices";
import MyBarChart from "../../components/BarChart";

export default function UserPage() {
  const router = useRouter();
  const { userId } = router.query;

  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser(id) {
      const user = await fetchUserFromApi(id);
      setUser(user);
      setIsLoading(false);
    }

    async function getUserActivity(id) {
      const userActivity = await fetchUserActivityFromApi(id);
      setUserActivity(userActivity);
      setIsLoading(false);
    }

    if (userId) {
      getUser(userId);
      getUserActivity(userId);
    }
  }, [userId]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement</p>
      ) : (
        <>
          <MyBarChart data={userActivity.sessions} />
          <h2>{user.firstName}</h2>
        </>
      )}
    </div>
  );
}
