import React, { useEffect, useState }  from "react";
import Paper from "@mui/material/Paper";
import { getMovieRecommendations } from "../../api/tmdb-api";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function MovieRecommendations({ movie }) {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    getMovieRecommendations(movie.id).then((recommendations) => {
      setRecommendations(recommendations);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
<Paper>

<ImageList sx={{width: 'auto', height: 'auto'}} cols={5}>
                
                {recommendations.map((results) => (
                    <ImageListItem key={results.file_path} cols={1}>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${results.poster_path}`}
                        alt={results.overview}
                    />
                    </ImageListItem>
                ))}
            </ImageList>
</Paper>


  );
}