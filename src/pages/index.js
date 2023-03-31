export default function Index() {
  return null;
}


// redirect to /user/12
export async function getServerSideProps() {
  const defaultUserId = 12;

  return {
    redirect: {
      destination: `/user/${defaultUserId}`,
      permanent: false,
    }
  };
}
