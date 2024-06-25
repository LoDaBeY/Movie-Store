import Navbar from "../Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DescriptionPage() {
  const [Description, setDescription] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmFhZjFiNjhiMTFmNmFjZjUwZmUzYTg3NDJmMGMxNyIsIm5iZiI6MTcxOTE1OTc2Mi4wMjU5MjcsInN1YiI6IjY2Nzg0YTlmMmYzNGVjYmRhNzNiMjI1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HAl0urrcB3rZpMGmK6DOb1HNwVzZJHwx2-q7LU3J6v0",
      },
    };

    const DataFetching = async () => {
      try {
        await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        )
          .then((response) => response.json())
          .then((response) => setDescription(response.results))
          .catch((err) => console.error(err));
      } catch (error) {
        console.log(error.message);
      }
    };
    DataFetching();
  }, [movieId]);


  if (!Description || Description.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full bg-[--background-color]">
        <h1>Catagories Page</h1>
      </main>

    </div>
  );
}
