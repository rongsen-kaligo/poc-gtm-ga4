import Link from "next/link";
import type { Metadata, ResolvingMetadata } from "next/types";

interface PageProps {
  params: Record<'id', string>;
}

interface OtherIdProps extends PageProps {}

export const runtime = 'edge';

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;

  return {
    title: {
      ...parentMetadata.title,
      default: `Other by ID - ${params.id}`,
      absolute: '',
    },
    description: `Currently viewing other by ID - ${params.id} | ${parentMetadata.description}`,
  };
}

function OtherId({ params }: OtherIdProps) {
  return (
    <main>
      <h2>Other by ID</h2>
      <h3>Current ID: {params.id}</h3>

      <aside>
        <Link href="/other">Go to Other</Link>
      </aside>

      <p>In et blandit dui. Suspendisse laoreet tristique nibh id pharetra. Integer egestas ullamcorper dui, non mollis libero malesuada ut. Praesent feugiat hendrerit posuere. Integer ultrices turpis a consequat rhoncus. Curabitur a turpis lobortis, consectetur eros sit amet, sodales purus. Cras facilisis turpis ac nisi fermentum, et venenatis tellus molestie. Nam nec erat sed tellus hendrerit feugiat. Etiam commodo hendrerit porta. Integer non elementum sapien. Pellentesque aliquet gravida augue, sit amet interdum nibh hendrerit quis. Mauris aliquam egestas libero, vel condimentum justo auctor vel.

Mauris id erat lacinia, rhoncus mauris eu, tincidunt metus. Sed id ex sed augue aliquam consectetur quis viverra augue. Duis ultricies consectetur neque, ut interdum velit mollis fermentum. Sed lorem metus, bibendum sit amet viverra id, vulputate quis leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer quis nisi ac odio vulputate sodales a sit amet felis. Nam sed risus non nulla hendrerit convallis. Aliquam eleifend, lectus vitae pellentesque faucibus, justo purus malesuada mi, et dictum ante dolor dignissim nulla. Suspendisse aliquet interdum sapien vitae dapibus. Sed aliquet eleifend libero nec ornare. Donec vitae cursus felis, et euismod diam. Etiam pulvinar metus nec ultrices dignissim. Praesent risus ipsum, eleifend a elementum at, pulvinar eu quam.

Praesent et eleifend ex. Sed eu ullamcorper dui. Ut porttitor est eros, vel placerat sem fringilla et. Mauris in molestie risus. Donec quis nulla bibendum, commodo erat ac, vehicula sem. Nam lobortis hendrerit pellentesque. In mi ante, placerat sit amet maximus eleifend, rhoncus ac nunc. Nulla ultricies tincidunt pharetra. Maecenas pellentesque elit sit amet nisi elementum molestie. Donec rutrum elementum est.

Ut hendrerit porttitor sem, eget congue nulla pulvinar non. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer congue mauris in ullamcorper rhoncus. Donec leo ex, lacinia eu sodales vel, eleifend a nulla. Sed vitae tortor feugiat, dignissim lectus vel, feugiat ex. Nullam lobortis mauris nunc, tempus blandit nibh ultricies ac. Donec pellentesque, odio in porttitor placerat, augue eros tincidunt lorem, laoreet hendrerit tellus urna eu nisl. Vivamus tincidunt ipsum vitae varius consequat. Sed sed vulputate justo, sit amet aliquam ipsum. Fusce facilisis vehicula neque gravida semper. Etiam lobortis ante nisi, ut mollis purus porta sodales. Maecenas sollicitudin purus sapien, ut consequat purus tincidunt eu.

Curabitur commodo est sit amet est convallis, a molestie mauris porta. Vestibulum ac felis elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit amet lorem sed nisl pulvinar lobortis. Etiam placerat ligula nisi, in convallis risus semper et. In laoreet est quis est hendrerit, at dignissim lacus eleifend. Mauris sagittis tristique eros. Ut semper orci a tincidunt eleifend. Pellentesque non tellus quis nisl rutrum ultrices eu eget nulla. Integer a ex eu elit pharetra feugiat. In vitae lacus eu erat tempus commodo. Pellentesque ultricies dictum consequat. Maecenas rutrum convallis tincidunt. Vivamus eget dictum dui, sed dignissim velit. Curabitur a lobortis ante. Suspendisse suscipit ligula a erat consequat euismod.

Nam blandit malesuada sem, nec vestibulum orci consectetur quis. Aliquam erat volutpat. Aenean posuere lobortis urna, at condimentum nibh. Integer id semper sapien. Duis venenatis tincidunt faucibus. Cras mattis justo quis porta dignissim. Pellentesque sed euismod lectus, ut pulvinar nibh. Nunc pharetra posuere lacus eget porttitor. Donec luctus dignissim leo, eleifend facilisis lectus. Proin viverra sodales mollis. Fusce iaculis mattis erat quis mollis.

Nulla et tristique tellus. Curabitur pharetra tellus nibh, at facilisis mi facilisis a. Integer a feugiat risus. Aliquam bibendum dolor iaculis, ullamcorper purus aliquet, efficitur leo. Mauris at leo sit amet justo rhoncus varius vitae quis velit. Suspendisse velit arcu, laoreet a dolor at, mollis bibendum lacus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam vitae sollicitudin lectus, auctor tristique tellus. Vestibulum massa magna, lobortis nec posuere ut, volutpat nec eros. Suspendisse sit amet turpis rhoncus, vulputate sapien a, lobortis libero.</p>
    </main>
  );
}

export default OtherId;
