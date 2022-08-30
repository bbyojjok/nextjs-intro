import { useEffect, useState } from 'react';
import Seo from '../components/Seo';

export default function Home({ results }) {
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
                style={{ width: '150px' }}
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <div>{movie.original_title}</div>
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
