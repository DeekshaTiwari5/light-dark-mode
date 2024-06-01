import { useTheme } from "../theme-context";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>Welcome</p>
    </div>
  );
};
export default Home;
