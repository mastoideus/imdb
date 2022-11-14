import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage/HomePage";
import TrailerPage from "./pages/TrailerPage/TrailerPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import SignInPage from "./pages/SignInPage/SignInPage";
import { moviesActions } from "./store/reducer";
import { useDispatch } from "react-redux/es/exports";
import { fetchTopMovies } from "./store/actions";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTopMovies(moviesActions.catchTopMovies, "popular"));
  }, []);
  useEffect(() => {
    dispatch(fetchTopMovies(moviesActions.catchFavMovies, "upcoming"));
  }, []);
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/trailer/:id">
            <TrailerPage />
          </Route>
          <Route path="/movies/:slug" exact>
            <MoviePage />
          </Route>
          <Route path="/sign_in">
            <SignInPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
