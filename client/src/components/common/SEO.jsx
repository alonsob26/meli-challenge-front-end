import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

/* componente para añadir informacion meta a cada 
pagina para mejorar el SEO */

export const SEO = ({ ...props }) => {
  const location = useLocation();
  const [query, setQuery] = useState();

  useEffect(() => {
    if (location.search) {
      setQuery(location.search.split("="));
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>
          {props.title} | {process.env.REACT_APP_DOMAIN}
        </title>
        <link rel="canonical" href={location.pathname} />
        <meta
          name="description"
          charSet="utf-8"
          //TODO: separar todos los nombres de los productos con una coma cuando exista un espacio en blanco
          content={
            "En Mercado Libre encontrarás todo lo que buscas. Descubre la mejor forma de comprar online."
          }
        />
        <meta
          name="keywords"
          charSet="utf-8"
          content={props.keywords + "comprar, vender, mercado libre"}
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Mercado Libre" />
        <meta name="theme-color" content="#ffe600" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#ffe600" />
        <meta name="msapplication-navbutton-color" content="#ffe600" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Mercado Libre" />
        <meta name="application-name" content="Mercado Libre" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google" content="notranslate" />
        <meta
          name="google-site-verification"
          content="google-site-verification"
        />
        <meta name="googlebot" content="index, follow" />
        <meta name="googlebot-news" content="index, follow" />
        <meta name="googlebot-video" content="index, follow" />
        <meta name="googlebot-image" content="index, follow" />
        <meta name="googlebot-mobile" content="index, follow" />
        <meta name="googlebot-ads" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": ${process.env.REACT_APP_DOMAIN},
              "potentialAction": {
                "@type": "SearchAction",
                "target": ${
                  process.env.REACT_APP_DOMAIN + query + "/{search_term_string}"
                }",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>
    </>
  );
};
