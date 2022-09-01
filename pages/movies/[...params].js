import { useRouter } from 'next/router';
import Seo from '../../components/Seo';

export default function MoviesId({ params }) {
  const router = useRouter();
  const [title, id] = params || [];

  return (
    <div>
      <Seo title={title} />
      <p>{title || 'loading...'}</p>
    </div>
  );
}

export function getServerSideProps({ params: { params } }) {
  return {
    props: {
      params,
    },
  };
}
