import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Error from "./pages/Error";

function App() {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/posts" element={<Posts />}/>
        <Route exact path="*" element={<Error />}/>
      </Routes>
    </div>
  );
}

export default App;
