import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
