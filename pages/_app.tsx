import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material";
import theme from "../styles/theme";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Script
        id="metaScript"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://www.schema.org",
            "@type": "SportsEvent",
            name: "Лёд надежды нашей 2023",
            url: "https://led.moscow.sport/",
            description:
              "«Лёд надежды нашей» – одно из старейших конькобежных состязаний в России. Мероприятие ежегодно объединяет сотни любителей конькобежного спорта.",
            startDate: "2023-02-04T08:00",
            endDate: "2023-02-04T12:00",
            location: {
              "@type": "Place",
              name: "СК «ЛУЖНИКИ»",
              sameAs: "https://led.moscow.sport/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Лужники, 24, стр. 4В",
                addressLocality: "г. Москва",
              },
            },
          }),
        }}
      />
      <Script
        id="id"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(91937297, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
            `,
        }}
      />
      <Head>
        <meta property="og:title" content="Лёд надежды нашей 2023" />
        <meta
          property="description"
          content="Московский спорт представляет большой лыжный праздник 11 и 12 февраля в Битце»"
        />
        <meta property="og:url" content="https://led.moscow.sport/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/icelogo.ico" />
        <link rel="icon" href="/images/icelogo.png" />
        <title>Лёд надежды нашей 2023</title>
        <meta name="yandex-verification" content="683c73cabb64ee20" />
      </Head>

      <Component {...pageProps} />
    </ThemeProvider>
  );
}
