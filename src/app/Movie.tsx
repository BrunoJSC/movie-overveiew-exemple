import Image from "next/image";
import Link from "next/link";

interface MovieProps {
  id: string;
  title: string;
  poster: string;
  date: string;
}

export default function Movie({ title, date, poster, id }: MovieProps) {
  const imagePath = `https://image.tmdb.org/t/p/original`;
  return (
    <main>
      <Link href={`/${id}`}>
        <Image
          src={imagePath + poster}
          alt={title}
          width={200}
          height={200}
          priority
        />
      </Link>
      <h1 className="text-white font-bold">{title}</h1>
      <h2 className="text-white">Release date</h2>
      <p className="text-white">{date}</p>
    </main>
  );
}
