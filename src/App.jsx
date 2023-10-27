import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Topics from "./components/Topics";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import CommentList from "./components/CommentList";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import SelectUser from "./components/SelectUser";
import ErrorPage from "./components/ErrorPage";
import Coding from "./components/Coding";
import Football from "./components/Football";
import Cooking from "./components/Cooking";

function App() {
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <Header />
      <Nav />

      <Routes>
        {currentUser ? (
          <>
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/" element={<Articles />} />
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/coding" element={<Coding />} />
            <Route path="/football" element={<Football />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/*" element={<SelectUser />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
            <Route
              path="/articles/:article_id/comments"
              element={<CommentList />}
            />
          </>
        ) : (
          <>
            <Route path="/coding" element={<Coding />} />
            <Route path="/football" element={<Football />} />
            <Route path="/cooking" element={<Cooking />} />
            <Route path="/error" element={<ErrorPage />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/" element={<Articles />} />
            <Route path="/*" element={<SelectUser />} />
            <Route path="/" element={<Home />} />
            <Route path="/articles/:article_id" element={<SingleArticle />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
