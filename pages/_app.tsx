import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <style global jsx>{`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Nunito';
          font-size: 20px;
          max-width: 60ch;
          margin: 0 auto;
          padding: 1ch 2ch;
        }

        code {
          background-color: #eee;
          padding: 0 0.5ch;
          border-radius: 0.3ch;
          border: 1px solid #999;
        }

        blockquote {
          background-color: #f0f0f0;
          width: 100%;
          margin: 0;
          padding: 2ch 3ch;
        }

        blockquote > p {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export default MyApp
