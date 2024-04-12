import type { Metadata, ResolvingMetadata } from "next/types";

import { Nav } from "../../components/nav/nav";

export async function generateMetadata(
  _: object,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;

  return {
    title: {
      ...parentMetadata.title,
      default: "About",
      absolute: '',
    },
    description: `Currently at about page | ${parentMetadata.description}`,
  };
}

function About() {
  return (
    <main>
      <h2>About</h2>

      <aside>
        <Nav current="about" />
      </aside>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id congue tellus, maximus elementum ligula. Nam nibh mi, hendrerit non libero nec, mollis pellentesque tortor. Duis congue, tortor sit amet hendrerit dapibus, augue ipsum aliquet ante, eget volutpat nisi nisi eu nibh. Nam lobortis quam id nunc elementum efficitur. Vestibulum eu nibh diam. Ut vestibulum faucibus mauris vel aliquam. Quisque sit amet magna facilisis, vestibulum turpis in, molestie felis. Sed congue mi sed neque tincidunt sodales.

Vivamus vehicula dapibus velit a facilisis. Nunc porta euismod venenatis. Donec sodales ornare suscipit. Phasellus tempor sapien vel erat porta laoreet. Etiam consectetur, quam ut lobortis molestie, mauris nulla pulvinar velit, sed pulvinar lectus massa sed ipsum. Maecenas dictum vitae ex et pharetra. Pellentesque condimentum, risus non sollicitudin dignissim, justo nibh tempus erat, vitae mattis quam massa quis nisi. Quisque quis ipsum erat. Proin euismod, lorem sed feugiat bibendum, nibh mauris facilisis purus, vel sagittis urna tortor nec lorem. Mauris finibus fringilla augue, nec efficitur turpis interdum in.

Donec at magna quis dui venenatis ornare. Donec accumsan rhoncus turpis, vitae facilisis tellus porta at. Donec eleifend tristique libero sed egestas. Nullam sapien ligula, luctus nec viverra quis, imperdiet nec enim. Integer mauris ante, sagittis vel velit et, vestibulum hendrerit ligula. Morbi posuere arcu tortor, ut ornare lacus posuere vitae. Proin mattis luctus ante, non laoreet elit venenatis nec. Nulla id sem commodo, dictum risus auctor, varius sapien. Aliquam pharetra venenatis quam, eu placerat felis pellentesque non. Quisque consequat nibh malesuada, porttitor est in, ullamcorper magna. Mauris sit amet nulla dictum, mattis justo vel, porttitor dolor. Cras blandit augue eget nulla auctor sollicitudin vitae ac eros. Cras ac porta urna. Aliquam varius nulla vitae risus venenatis, sit amet pharetra massa finibus. Aliquam dolor neque, maximus sed scelerisque vel, vulputate vitae enim. Quisque imperdiet odio tortor, quis fermentum urna egestas ac.

Fusce in fermentum sem. Nullam a arcu non tellus aliquet finibus ac vel sem. Vivamus volutpat tempus nisl eget pharetra. Proin euismod rhoncus odio vel consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis mi fringilla, porttitor ligula ac, efficitur mauris. Nunc a egestas nisi. Sed eleifend odio eu fermentum maximus. Nullam sollicitudin turpis ornare eros maximus, sit amet sollicitudin justo posuere. Nam tristique turpis vel nunc vulputate, eu pulvinar felis congue.

Suspendisse lectus erat, consectetur vitae massa interdum, porttitor tempor mi. Aliquam erat volutpat. Maecenas at velit et lorem volutpat ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempus arcu in rhoncus vehicula. Aenean rhoncus, nibh nec dictum suscipit, ex lacus commodo metus, ac bibendum sapien lacus vitae urna. Quisque tempus varius diam, vitae scelerisque tortor. Nam imperdiet lorem purus, id dignissim ex tempor vel. Pellentesque est ante, interdum sit amet dignissim eu, gravida ac arcu. Phasellus lacinia augue pharetra consectetur imperdiet. Fusce ex nisl, lacinia eu neque accumsan, placerat imperdiet ante.</p>
    </main>
  );
}

export default About;
