import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes} from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import NowPlayingPage from "./pages/nowPlayingMoviesPage";
import TrendingPage from "./pages/trendingPage";
import TopRatedPage from "./pages/topMoviesPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';


import SignUpPage from "./signUpPage";
import LoginPage from "./loginPage";
import AuthProvider from "./authContext";
import MovieProvider from "./contexts/moviesContext";
import AuthHeader from "./authHeader";
import ProtectedRoutes from "./protectedRoutes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AuthProvider>
        <SiteHeader />
        <AuthHeader />

        <MovieProvider>
        <Routes>
            <Route path="/" element={ <HomePage /> } />
            <Route path="/signup" element={ <SignUpPage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="*" element={ <Navigate to="/" /> } />

        <Route element={<ProtectedRoutes />}>
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/popular" element={<PopularMoviesPage />} />
        <Route path="/movies/top_rated" element={<TopRatedPage />} />
        <Route path="/movies/now_playing" element={<NowPlayingPage />} />
        <Route path="/trending/movie/day" element={<TrendingPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
            </Route>

        </Routes>
        </MovieProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));