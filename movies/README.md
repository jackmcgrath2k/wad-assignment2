# Assignment 1 - React JS App

Name: Jack McGrath

## Overiew

This assignment involved adding to the movies app we have been creating over the course of the semester. I added some extra features to the app and the completed project can be found in this repository.

### Features

3 New Views Added:
+ The Popular page - shows a list of popular movies out at the moment.
+ The Now Playing Page - shows a list of movies that are currently in theatres.
+ The Top Rated Page - shows a list of the top rated movies of all time.

New Routing, Parameterized URLs & TMDB Endpoints Added:
+ Similar movies now appear underneath a movies page when you click more info.
+ Recommended movies now appear underneath a movies page when you click more info.
+ Trending movies now appear as it's own page.


Extra:
+ Responive UI Included.
+ Changed the site header colour to blue.



## API endpoints.

+ List of movies that are Similiar to the currently selected one - /movie/{movie_id}/similar
+ List of movies that are to be recommended based off the currently selected one - /movie/{movie_id}/recommendations
+ List of movies Now Playing - /movies/now_playing
+ List of movies that are Top Rates - /movies/top_rated
+ List of movies that are currently popular - /movies/popular
+ List of movies that are currently trending - /trending/movie/day


## Routing.

+ /movies/popular - Displays the popular movies page
+ /movies/now_playing - Displays the Now Playing movies page
+ /movies/top_rated - Displays the Top Rated movies of all time
+ /trending/movie/day - Displays the daily tredning movies

####