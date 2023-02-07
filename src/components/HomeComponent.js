import { IconHome } from '@tabler/icons-react';
import Link from 'next/link';

export default function HomeComponent() {
  return (
    <>
      <Link
        href="/"
        className="go-back-home"
        title="Go Back Home"
        role="button"
      >
        <IconHome />
      </Link>
    </>
  );
}
