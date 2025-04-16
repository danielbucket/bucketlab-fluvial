import { useLoaderData } from 'react-router';

import TypewriterEffect from '../../../utils/TypewriterEffect';
import image from '../assets/images/laboratory_04.jpeg';

interface LoaderData {
  message: string,
  author: string,
}

export async function loader() {
  return {
    message: 'Solving all of the worlds problems, one bucket of code at a time.',
    author: 'The Code Bucket',
  };
};

export default function Home() {
  const loaderData = useLoaderData() as LoaderData;

  return (
    <div>
      <div>
        <img src={image} alt="Laboratory" style={{ width: '100%', height: 'auto' }} />
      </div>
      <TypewriterEffect text={loaderData.message} speed={50} />
      <p>-{loaderData.author}</p>
    </div>
  )
};