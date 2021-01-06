import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>HEADER</header>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Nisl sapien dignissim lectus vulputate adipiscing mus egestas aenean
          placerat, purus habitant ad iaculis erat curabitur montes ut, risus
          orci bibendum conubia sit ac nam rutrum. Feugiat eu maecenas arcu
          euismod sodales class cursus ad, fames est facilisis suspendisse
          tristique duis ullamcorper himenaeos, velit in fringilla nam inceptos
          condimentum ultrices. Fusce id vulputate vel at dis dictum, arcu
          lacinia massa nec egestas faucibus, nisl tortor nulla quisque purus.
          Risus mollis metus porttitor iaculis ad aptent, cras ultrices auctor
          egestas lorem vulputate, blandit orci vel at venenatis. Eu ad mi
          placerat fringilla massa lectus interdum ornare, suspendisse eleifend
          condimentum posuere rhoncus integer himenaeos, class sit dictum
          volutpat blandit lacinia tristique.
        </p>
        <ul>
          <li>
            <a href="#" onClick={() => console.log("link 1")}>
              link 1
            </a>
          </li>
          <li>
            <a href="#" onClick={() => console.log("link 2")}>
              link 2
            </a>
          </li>
          <li>
            <a href="#" onClick={() => console.log("link 3")}>
              link 3
            </a>
          </li>
        </ul>
        <p>
          Lacinia urna mus magnis curabitur sapien quis platea, cras turpis
          integer at aenean dictum feugiat lacus, ad neque dignissim et posuere
          commodo. Turpis justo sapien mattis hendrerit iaculis tempus pharetra,
          quisque facilisis nascetur faucibus mi adipiscing, purus cras risus
          fringilla venenatis donec. Cras pharetra metus venenatis mattis semper
          suscipit cursus eros aliquam, nullam class consequat blandit nibh vel
          per urna penatibus, lobortis himenaeos fermentum nascetur integer
          ullamcorper donec tincidunt. Cum sed consequat sodales nibh nec nisl
          maecenas proin, ac suscipit fusce rutrum sapien pulvinar vel, augue
          urna mus posuere euismod parturient vehicula. Sociis vivamus eleifend
          dolor parturient curae pretium dui himenaeos nam eget duis
          ullamcorper, ad ante suspendisse faucibus class turpis sodales
          malesuada accumsan semper consequat. Taciti nibh dignissim aliquet
          vestibulum ultricies lectus porttitor sit tincidunt, potenti molestie
          turpis placerat habitasse fermentum augue.
        </p>
        <ul>
          <li>
            <button type="button" onClick={() => console.log("button 1")}>
              button 1
            </button>
          </li>
          <li>
            <button type="button" onClick={() => console.log("button 2")}>
              button 2
            </button>
          </li>
          <li>
            <button type="button" onClick={() => console.log("button 3")}>
              button 3
            </button>
          </li>
        </ul>
        <p>
          Ridiculus nunc netus sed enim turpis per vestibulum scelerisque, duis
          pretium blandit pharetra adipiscing fames sit facilisi nisl, lectus
          volutpat gravida dictumst vel fringilla tristique. Ultricies lorem
          duis libero enim ullamcorper natoque habitant mattis purus velit
          viverra, consectetur varius aptent euismod egestas praesent sodales
          morbi montes. Inceptos sed lectus curae ipsum sit cum eleifend
          praesent, facilisi mus fringilla penatibus ridiculus accumsan sem.
          Molestie fermentum aliquet vestibulum congue ultrices sed habitant
          urna, lectus lacinia duis quis volutpat dictumst dui lobortis, platea
          ac odio pulvinar quisque sociis leo. Viverra mus class sem cursus
          magnis netus condimentum ante, curabitur conubia sagittis auctor orci
          dictumst dapibus metus vitae, vestibulum lacinia posuere fringilla
          suspendisse nascetur inceptos. Cursus iaculis fusce fames tristique
          mauris torquent, potenti mus cras aliquam per senectus malesuada,
          ullamcorper curabitur tincidunt et aenean. Malesuada phasellus
          vestibulum bibendum dis molestie sodales odio tristique nostra, aptent
          eu nam nisi nunc feugiat maecenas eget. Augue sem consequat mattis
          congue sagittis ultrices dapibus, varius volutpat suspendisse gravida
          nunc magnis, platea suscipit eu mollis facilisi eros. Donec molestie
          phasellus et nunc nibh ac id senectus dignissim dictum adipiscing duis
          sodales, parturient ad mus pellentesque iaculis fames tincidunt risus
          per fermentum sociis habitasse, platea nisl sit pulvinar montes amet
          nec sapien proin est leo conubia.
        </p>
      </main>

      <footer>FOOTER</footer>
    </>
  );
}
