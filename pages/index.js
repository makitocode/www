import Head from 'next/head'

const themes = {
  light: {
    bodyBg: 'white',
    main: 'black',
    gray: '#999',
    darkGray: '#444',
    link: '#0076FF',
    skill: '#e3e5e7',
    border: '#eaeaea'
  },
  dark: {
    bodyBg: 'black',
    main: 'white',
    gray: '#ccc',
    darkGray: '#999',
    link: '#fff',
    skill: '#333',
    border: '#333'
  }
}


const Home = () => (
  <div className="container">
    <Head>
      <title>makito</title>
      <link rel="icon" href="/favicon.ico" />
      
    </Head>

    <main>

      <h1 className="title">
        <span className="line-through"><b>Welcome to makito</b></span> Oops!
      </h1>
      <h2 className="title">
      Under construction 🚧
      </h2>

      <hr></hr>

      <p className="description">
      mental backup of what I think and what I do
      </p>

      <div className="grid">

      </div>
    </main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
       Powered by <img src="/vercel.svg" alt="Vercel Logo" />
      </a>
    </footer>

    <style jsx>{`

      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .intro {
        max-width: 980px;
        padding: 0 30px;
      }

      .line-through {
        text-decoration:line-through;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      h2 {
        font-size: 3em;
        margin: 0;
      }
      h3 {
        margin: 0;
        text-transform: uppercase;
      }

      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-left: 0.5rem;
      }

      footer a {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: ${themes.light.bodyBg};
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 800px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
      }

      .card p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        background-color: ${themes.light.bodyBg};
        color: ${themes.light.main};
        font-family: "SF Pro Text","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
        font-size: 1em;
        font-style: normal;
        font-weight: 400;
        margin: 0 20px 0 20px;
        line-height: 1.47059;
        letter-spacing: -.022em;
        transition: background-color 0.2s ease, color 0.2s ease;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
