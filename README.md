# Assignment 2 - Web API.

Name: Jack McGrath

## Features.

API Routes Added:
+ The Popular page - shows a list of popular movies out at the moment.
+ The Now Playing Page - shows a list of movies that are currently in theatres.
+ The Similar Page - shows a list of the top rated movies of all time.
+ Mongo Integration
+Minimal React Integration (The ability to GET and POST data to API)
## Setup requirements.

NA

## API Configuration

No prior configuration is necessary in regards to creating as .env file as they are already included and also included in the gitignore file to be protected.

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies 
- /api/movies/{movie_id}/keywords | GET | Gets a movies keywords 
- /api/movies/{movieid}/similar | GET | Get all similar movies to a movie
- /api/movies/{movieid}/reviews | POST | Create a new review for Movie 

## Security and Authentication

The authentication/security measures I made use of were passport, the protected routes are listed below:
MovieReviewPage
Favourites
Upcoming
Popular
TopRated
NowPLaying
Trending
HomePage
MoviesPage

## Integrating with React App

I integrated the my React App with the API through creating an api folder, the views that use the Web API are Upcoming, Similar and Now Playing.
