import Link from 'next/link';
import type { Metadata, ResolvingMetadata } from 'next/types';

export async function generateMetadata(
  _: object,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;

  return {
    title: {
      ...parentMetadata.title,
      default: 'Error',
      absolute: '',
    },
    description: `Currently at error page | ${parentMetadata.description}`,
  };
}

function ErrorPage() {
  return (
    <main>
      <h2>Error</h2>

      <p>Something went wrong!</p>

      <Link href="/">Go to home</Link>
    </main>
  );
}

// biome-ignore lint/style/noDefaultExport: This is a Next.js page
export default ErrorPage;
