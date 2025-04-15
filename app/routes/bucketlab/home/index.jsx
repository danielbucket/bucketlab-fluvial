import { Outlet } from 'react-router';

export default function Home() {

  return (
    <div>
      <h1>Welcome to the BucketLab</h1>
      <p>This is a simple bucket lab application.</p>
      <Outlet />
    </div>
  )
};