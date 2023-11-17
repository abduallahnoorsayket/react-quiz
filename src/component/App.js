import "../styles/App.css";
import { Layout } from "./Layout";
// import { Home } from "./pages/Home";
// import Signup from "./Signup";
// import Login from "./Login";
import Quiz from "./pages/Quiz";

function App() {
  return (
    <>
      <Layout>
        {/* <Home /> */}
        {/* <Signup /> */}
        {/* <Login /> */}
        <Quiz />
      </Layout>
    </>
  );
}

export default App;
