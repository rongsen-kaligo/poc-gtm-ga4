import type { Metadata, ResolvingMetadata } from 'next/types';

import { Nav } from '../../components/nav/nav';
import { Rfy } from '../../components/rfy/rfy';

export async function generateMetadata(
  _: object,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;

  return {
    title: {
      ...parentMetadata.title,
      default: 'Other',
      absolute: '',
    },
    description: `Currently at other page | ${parentMetadata.description}`,
  };
}

function Other() {
  return (
    <main>
      <h2>Other</h2>

      <aside>
        <Nav current="other" />
      </aside>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum
        nisl nulla, sit amet tempor purus lobortis ac. Sed luctus metus nisl, a
        dictum nibh sollicitudin id. Aenean lobortis sodales libero at
        ultricies. Aliquam sapien elit, tempor nec libero quis, congue facilisis
        est. Quisque bibendum massa non fringilla mollis. Fusce auctor metus
        eget nulla posuere, eu rhoncus orci pellentesque. Integer at fringilla
        tortor, vitae sagittis orci. Duis ac diam vel elit elementum tincidunt.
        Sed consequat ac lorem sed sollicitudin. Integer vulputate, tellus eget
        accumsan laoreet, sapien massa viverra nibh, et placerat nisl leo at
        magna. Sed quis lacus et erat euismod suscipit sit amet nec lacus. Morbi
        eu erat ornare, placerat lectus posuere, semper nunc. Quisque maximus
        ipsum posuere nunc accumsan lobortis. Pellentesque posuere bibendum
        ullamcorper. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Integer eu urna rutrum, varius orci a,
        congue ex. Fusce tellus tellus, bibendum gravida ullamcorper ut, varius
        eget odio. In hac habitasse platea dictumst. Integer nec neque non
        tellus lacinia consequat. Quisque massa ligula, sodales eget
        sollicitudin ut, tincidunt nec quam. Vivamus nec ultricies erat, at
        finibus elit. Donec eget congue nisl. Mauris hendrerit nulla in mi
        porttitor, vel pulvinar est aliquet. Suspendisse nisi dui, imperdiet in
        dolor sed, viverra dignissim tortor. Phasellus lacinia varius nunc, quis
        fringilla augue porta a. Curabitur dignissim, sem sed congue
        ullamcorper, libero dolor fermentum leo, ut varius metus dui ut velit.
        Vivamus justo est, aliquam sed neque at, pulvinar ornare nisi. Mauris
        aliquam leo ut leo elementum, et pellentesque justo facilisis. Quisque
        ornare lobortis erat, sit amet feugiat lectus ornare eget. Aliquam ac
        convallis leo. Vestibulum et ipsum eu ex vulputate molestie eget ac
        erat. Quisque commodo efficitur volutpat. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas.
        Phasellus luctus ligula vel magna aliquam semper. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Fusce in purus fermentum,
        eleifend mauris quis, congue felis. Aenean at aliquam eros. Praesent nec
        ligula a eros consectetur consectetur. Donec pulvinar tellus sed
        consectetur laoreet. Sed lacinia tempor aliquam. Phasellus mollis
        lacinia mi, sed varius lacus malesuada a. Aenean consectetur, tellus vel
        fermentum tincidunt, mi sapien porttitor eros, vitae hendrerit diam sem
        malesuada magna. Mauris laoreet, odio vel tincidunt luctus, tellus ipsum
        dapibus lorem, id condimentum quam ligula vitae nunc. Nullam
        condimentum, arcu ut congue cursus, lectus odio porta nisi, non pretium
        libero massa in augue. Donec mi nulla, vehicula sed aliquam eget,
        rhoncus sit amet purus. Phasellus accumsan convallis mattis. Quisque
        scelerisque egestas dictum. Donec diam sem, vulputate at nisl porttitor,
        semper congue nibh. Etiam eros turpis, malesuada eu faucibus at,
        bibendum sed augue. Integer vestibulum tempor ante efficitur porta.
        Proin felis metus, porta vitae aliquet sed, faucibus sed leo. Aliquam
        erat volutpat. Nunc euismod neque ullamcorper est ultrices aliquet.
        Vestibulum ac est sem. Donec tempor ligula sit amet urna feugiat
        pharetra. Sed a urna vehicula, facilisis lorem eu, sagittis metus.
        Quisque molestie, arcu vitae dapibus suscipit, neque nisi varius libero,
        non pulvinar leo tellus at augue. Donec euismod mollis consequat.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Cras tincidunt risus non lectus tempor cursus.
        Duis pulvinar augue at mauris pulvinar, condimentum dapibus lorem
        lacinia. Etiam a volutpat metus. In euismod semper nulla. Aenean
        condimentum, ex quis lacinia semper, libero diam tincidunt lectus, eu
        egestas erat nibh tempor lectus. Vivamus eu tellus fringilla,
        ullamcorper elit consequat, rutrum velit. Ut condimentum, ante bibendum
        sollicitudin venenatis, elit magna congue arcu, vitae commodo sapien
        libero a eros. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Mauris leo nibh, faucibus non vestibulum in, faucibus et
        sapien. Fusce sit amet sodales justo, ut porttitor lorem. Maecenas
        ornare risus sed lorem porta semper. Pellentesque quis ex egestas,
        egestas nisl et, porta nulla. Vestibulum faucibus purus porta, fermentum
        leo vitae, egestas leo. Nulla facilisi. Ut aliquet bibendum augue, sed
        sollicitudin neque pellentesque rutrum. Mauris lobortis nibh eu viverra
        luctus. Etiam mauris nisl, vehicula id ante non, eleifend accumsan
        velit. Praesent pulvinar accumsan eros non rutrum. Curabitur ac tellus
        fermentum, elementum tortor a, pellentesque libero. Curabitur non
        tincidunt mauris. Fusce non lectus auctor, pharetra sapien non, accumsan
        eros. Cras maximus purus et arcu porttitor, id ornare nulla tincidunt.
        Quisque sodales augue ac nisi rutrum, nec aliquam augue facilisis. Nunc
        mollis finibus lorem, sit amet iaculis neque consectetur et. Integer
        magna sapien, scelerisque in erat id, porta feugiat lacus. Praesent eu
        auctor lacus, a facilisis magna. Pellentesque et lacus vitae dui aliquet
        porta at ut ante. In venenatis semper vestibulum. Vestibulum sit amet
        massa est. Nam malesuada laoreet erat fermentum ornare. Donec pulvinar
        metus nec purus aliquet suscipit. Suspendisse quis augue quis eros
        iaculis tincidunt nec eget quam. Fusce vitae egestas massa, vitae
        efficitur eros. Nulla vehicula dignissim nunc eleifend vehicula. Ut
        lectus urna, interdum luctus arcu sit amet, cursus cursus purus. Proin
        quis mauris luctus, euismod tortor quis, congue dolor. Etiam a elementum
        urna, et fringilla est. Donec ultrices porttitor sapien a dignissim. In
        hac habitasse platea dictumst. Nam eget nulla vitae urna commodo
        blandit. Aenean quis enim quam. Etiam vel sagittis velit. Suspendisse
        congue risus eu mauris lacinia suscipit. Aenean accumsan pellentesque
        velit. Proin egestas auctor molestie. Donec feugiat ex tristique dui
        venenatis, sed ornare nulla iaculis. Nunc non posuere ante. Nulla
        porttitor lorem vitae nulla eleifend rhoncus. Ut laoreet magna ut mattis
        porta. Quisque sagittis ligula elit, sit amet feugiat tellus suscipit
        sit amet. Cras semper volutpat leo. Integer pulvinar neque in vestibulum
        ornare. Aenean elementum vehicula ligula, ut consequat elit tincidunt
        sit amet. Nulla ac cursus felis. Phasellus velit sapien, viverra eget
        turpis ac, bibendum tincidunt sapien. Nullam et placerat sapien.
        Curabitur augue mauris, euismod ultricies tristique ac, vehicula
        malesuada lectus. Ut efficitur feugiat est nec finibus. Integer
        vulputate dui quis urna mattis, ut condimentum sem feugiat. Maecenas
        semper id ex eget laoreet. Duis elit lorem, dapibus aliquam tincidunt
        eu, malesuada vitae dui. Pellentesque maximus nunc eu massa auctor
        tempor. Phasellus in lacus vitae orci accumsan tempus. Mauris eleifend
        quam id nibh scelerisque, et laoreet dui rhoncus. Aliquam congue
        malesuada nisi, ac eleifend risus ornare ut. Mauris eget purus
        fringilla, suscipit nulla ut, aliquam ligula. Nullam est nisl, laoreet
        ac sodales posuere, pulvinar vel lacus. Nullam condimentum, sem eu
        posuere scelerisque, nulla risus luctus lectus, vitae hendrerit ipsum
        urna ut urna. Maecenas auctor mi pretium massa maximus, nec sollicitudin
        nulla imperdiet. Sed eu sapien vulputate, dapibus lorem et, lacinia
        lectus. Proin semper, elit ac scelerisque rhoncus, eros est imperdiet
        tortor, at tempor nisi libero id est. Pellentesque magna nulla, eleifend
        et ipsum at, rhoncus suscipit dui. Donec et magna quis elit elementum
        aliquet et vitae enim. Mauris bibendum quis dolor quis malesuada. Duis
        placerat ut risus ut vulputate. Nam nisi quam, vulputate eu placerat a,
        maximus eget orci. Nam dapibus luctus eros et tincidunt. Donec sapien
        sapien, volutpat mattis laoreet sed, rhoncus et augue. Integer gravida
        ante neque, a aliquam est scelerisque interdum. Ut in vehicula purus. Ut
        tempus tempor tellus. Proin semper semper felis, a mattis justo
        venenatis a. Donec ut laoreet augue. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. In
        consectetur accumsan metus, sit amet consectetur lorem pharetra vitae.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque
        efficitur, urna et tincidunt feugiat, sapien purus sagittis ex, at
        iaculis enim magna vitae tellus. In congue nisi ac libero volutpat
        varius. Cras tempus venenatis erat, eu interdum erat tincidunt at. Nunc
        et quam condimentum, scelerisque metus at, auctor felis. Sed posuere
        tortor tincidunt elit laoreet bibendum. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Maecenas
        maximus lacinia purus, nec aliquet odio consectetur eget. Aliquam vitae
        enim quis urna sollicitudin placerat ac et mi. Donec hendrerit quis
        augue quis semper. Praesent justo dui, maximus a luctus in, dignissim a
        elit. Praesent eleifend risus sit amet justo pretium dignissim. Vivamus
        tempus, neque sit amet porta convallis, nulla massa facilisis lorem, in
        tristique elit nibh egestas orci. Sed varius lacus id erat auctor
        venenatis. In in porttitor ante, hendrerit posuere metus. Nulla posuere
        sit amet enim eget tincidunt. Nulla ac lorem hendrerit leo luctus
        rutrum. Pellentesque porttitor, lorem quis gravida pellentesque, augue
        massa faucibus neque, non interdum arcu felis in diam. Donec urna diam,
        imperdiet non mattis sed, egestas quis ex. Donec ac nisl eleifend,
        pulvinar dolor sed, pretium ligula. Aliquam egestas ligula a felis
        molestie, et hendrerit libero porta. Maecenas velit ex, posuere eget
        elit ut, imperdiet volutpat metus.
      </p>

      <Rfy />

      <p>
        In et blandit dui. Suspendisse laoreet tristique nibh id pharetra.
        Integer egestas ullamcorper dui, non mollis libero malesuada ut.
        Praesent feugiat hendrerit posuere. Integer ultrices turpis a consequat
        rhoncus. Curabitur a turpis lobortis, consectetur eros sit amet, sodales
        purus. Cras facilisis turpis ac nisi fermentum, et venenatis tellus
        molestie. Nam nec erat sed tellus hendrerit feugiat. Etiam commodo
        hendrerit porta. Integer non elementum sapien. Pellentesque aliquet
        gravida augue, sit amet interdum nibh hendrerit quis. Mauris aliquam
        egestas libero, vel condimentum justo auctor vel. Mauris id erat
        lacinia, rhoncus mauris eu, tincidunt metus. Sed id ex sed augue aliquam
        consectetur quis viverra augue. Duis ultricies consectetur neque, ut
        interdum velit mollis fermentum. Sed lorem metus, bibendum sit amet
        viverra id, vulputate quis leo. Orci varius natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Integer quis nisi ac odio
        vulputate sodales a sit amet felis. Nam sed risus non nulla hendrerit
        convallis. Aliquam eleifend, lectus vitae pellentesque faucibus, justo
        purus malesuada mi, et dictum ante dolor dignissim nulla. Suspendisse
        aliquet interdum sapien vitae dapibus. Sed aliquet eleifend libero nec
        ornare. Donec vitae cursus felis, et euismod diam. Etiam pulvinar metus
        nec ultrices dignissim. Praesent risus ipsum, eleifend a elementum at,
        pulvinar eu quam. Praesent et eleifend ex. Sed eu ullamcorper dui. Ut
        porttitor est eros, vel placerat sem fringilla et. Mauris in molestie
        risus. Donec quis nulla bibendum, commodo erat ac, vehicula sem. Nam
        lobortis hendrerit pellentesque. In mi ante, placerat sit amet maximus
        eleifend, rhoncus ac nunc. Nulla ultricies tincidunt pharetra. Maecenas
        pellentesque elit sit amet nisi elementum molestie. Donec rutrum
        elementum est. Ut hendrerit porttitor sem, eget congue nulla pulvinar
        non. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
        per inceptos himenaeos. Integer congue mauris in ullamcorper rhoncus.
        Donec leo ex, lacinia eu sodales vel, eleifend a nulla. Sed vitae tortor
        feugiat, dignissim lectus vel, feugiat ex. Nullam lobortis mauris nunc,
        tempus blandit nibh ultricies ac. Donec pellentesque, odio in porttitor
        placerat, augue eros tincidunt lorem, laoreet hendrerit tellus urna eu
        nisl. Vivamus tincidunt ipsum vitae varius consequat. Sed sed vulputate
        justo, sit amet aliquam ipsum. Fusce facilisis vehicula neque gravida
        semper. Etiam lobortis ante nisi, ut mollis purus porta sodales.
        Maecenas sollicitudin purus sapien, ut consequat purus tincidunt eu.
        Curabitur commodo est sit amet est convallis, a molestie mauris porta.
        Vestibulum ac felis elit. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Pellentesque sit
        amet lorem sed nisl pulvinar lobortis. Etiam placerat ligula nisi, in
        convallis risus semper et. In laoreet est quis est hendrerit, at
        dignissim lacus eleifend. Mauris sagittis tristique eros. Ut semper orci
        a tincidunt eleifend. Pellentesque non tellus quis nisl rutrum ultrices
        eu eget nulla. Integer a ex eu elit pharetra feugiat. In vitae lacus eu
        erat tempus commodo. Pellentesque ultricies dictum consequat. Maecenas
        rutrum convallis tincidunt. Vivamus eget dictum dui, sed dignissim
        velit. Curabitur a lobortis ante. Suspendisse suscipit ligula a erat
        consequat euismod. Nam blandit malesuada sem, nec vestibulum orci
        consectetur quis. Aliquam erat volutpat. Aenean posuere lobortis urna,
        at condimentum nibh. Integer id semper sapien. Duis venenatis tincidunt
        faucibus. Cras mattis justo quis porta dignissim. Pellentesque sed
        euismod lectus, ut pulvinar nibh. Nunc pharetra posuere lacus eget
        porttitor. Donec luctus dignissim leo, eleifend facilisis lectus. Proin
        viverra sodales mollis. Fusce iaculis mattis erat quis mollis. Nulla et
        tristique tellus. Curabitur pharetra tellus nibh, at facilisis mi
        facilisis a. Integer a feugiat risus. Aliquam bibendum dolor iaculis,
        ullamcorper purus aliquet, efficitur leo. Mauris at leo sit amet justo
        rhoncus varius vitae quis velit. Suspendisse velit arcu, laoreet a dolor
        at, mollis bibendum lacus. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Nam vitae sollicitudin
        lectus, auctor tristique tellus. Vestibulum massa magna, lobortis nec
        posuere ut, volutpat nec eros. Suspendisse sit amet turpis rhoncus,
        vulputate sapien a, lobortis libero.
      </p>
    </main>
  );
}

export default Other;
