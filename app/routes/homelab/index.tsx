import { Outlet } from 'react-router';

export default function HomeLabIndex() {
  return (
    <div>
      <h1>Welcome to the HomeLab</h1>
      <p>This is the index page of the HomeLab.</p>
      <Outlet />
    </div>
  );
};