export function Welcome({ message }: { message: string }) {
  return (
    <main className="">
      <div className="">
        <nav className="">
          <p className="">
            What&apos;s next?
          </p>
          <ul>
            <li className="">{message}</li>
          </ul>
        </nav>
      </div>
    </main>
  );
};