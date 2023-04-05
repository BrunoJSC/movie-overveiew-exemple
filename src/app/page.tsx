import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    {
      next: {
        revalidate: 60,
      }
    }
  );
  const movies = await data.json();
  console.log(movies);

  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
      {movies.results.map((movie: any) => (
        <Movie
          id={movie.id}
          title={movie.title}
          date={movie.release_date}
          key={movie.id}
          poster={movie.poster_path}
        />
      ))}
      </div>
    </main>
  );
}
