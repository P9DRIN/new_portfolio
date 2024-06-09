import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR" suppressHydrationWarning>
      <Head>
        <link rel="icon" href="/vercel.svg" type="image/x-icon" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
