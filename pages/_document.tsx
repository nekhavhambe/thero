import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
         <Head>
          <title>The Bolder</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-data-grid@7.0.0-beta.46/lib/styles.min.css" />
        </Head>
      <body>
        <Main />
        <NextScript />
        <p>martin is a dummy</p>
        <script>
          alert("yes")
        </script>
      </body>
    </Html>
  )
}