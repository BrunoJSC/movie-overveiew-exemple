import Image from "next/image";

interface Params {
  movie: string;
}

interface MovieDetailsProps {
  params: Params;
}

export default async function MovieDetails({ params }: MovieDetailsProps) {
  const imagePath = `https://image.tmdb.org/t/p/original`;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`
  );

  const movieDetails = await data.json();

  return (
    <main>
      <div>
        <h2 className="text-2xl font-extrabold text-white">
          {movieDetails.title}
        </h2>
        <h2 className="text-lg text-white">{movieDetails.release_date}</h2>
        <h2 className="text-white">Runtime {movieDetails.runtime} minutes</h2>

        <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-white">
          {movieDetails.status}
        </h2>

        <Image
          className="my-12 w-full"
          src={imagePath + movieDetails.backdrop_path}
          alt={movieDetails.title}
          width={1000}
          height={1000}
          property=""
        />

        <p className="text-white">{movieDetails.overview}</p>
      </div>
    </main>
  );
}
