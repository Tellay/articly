import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Error from "./pages/Error";

import AuthGithubProvider from "./contexts/GithubAuth";

function App() {
  return (
    <AuthGithubProvider>
      <div className="w-full h-screen overflow-hidden">
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/posts" element={<Posts />}/>
          <Route exact path="*" element={<Error />}/>
        </Routes>
      </div>
    </AuthGithubProvider>
  );
}

export default App;
