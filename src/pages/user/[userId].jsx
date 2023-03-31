import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchUser } from "@/services/fetchService";
import Layout from "../../components/Layout";

export default function UserPage() {
  const router = useRouter();
  const { userId } = router.query;

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getUser(id) {
      const user = await fetchUser(id);
      setUser(user);
      setIsLoading(false);
    }

    if (userId) {
      getUser(userId);
    }
  }, [userId]);

  return (
    <Layout>
      <div>
        {isLoading ? <p>Chargement...</p> : <h2>Bonjour {user.name}</h2>}
      </div>
    </Layout>
  );
}
