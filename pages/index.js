import Link from 'next/link';
import Seo from '../components/Seo';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (movie) => {
    console.log(movie);
    router.push(`/movies/${movie.original_title}/${movie.id}`);
  };

  return (
    <>
      <Seo title="Home" />
      <div>
        Home
        {!results && <h4>loading...</h4>}
        <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
          {results?.map((movie) => (
            <li style={{ width: '50%' }} key={movie.id}>
              <img
                onClick={() => onClick(movie)}
                style={{ width: '150px' }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <span style={{ display: 'block' }}>
                <Link href={`/movies/${movie.original_title}/${movie.id}`}>
                  <a>{movie.original_title}</a>
                </Link>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch('http://localhost:3000/api/movies')
  ).json();
  return {
    props: {
      results,
    },
  };
}
