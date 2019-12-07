import { NextPage } from 'next';

const Home: NextPage<{ userAgent: string | undefined }> = ({ userAgent }) => (
  <h1>Map Locator | User Agent: {userAgent}</h1>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ?
    req.headers['user-agent'] :
    navigator.userAgent;
  
  return { userAgent };
};

export default Home;
