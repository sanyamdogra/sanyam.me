import Head from "next/head";

import React from "react";
import { DEFAULT_SITE_DESCRIPTION, SITE_URL } from "../../../common/constants";

interface Props {
  pageTitle: string;
  description?: string;
  noIndex?: boolean;
}

export const DocumentHead: React.FC<Props> = ({
  pageTitle,
  description = DEFAULT_SITE_DESCRIPTION,
  noIndex,
}) => {
  const _pageTitle = `${pageTitle} | Sanyam Dogra`;
  return (
    <Head>
      <title>{_pageTitle}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex" />
      ) : (
        <meta name="robots" content="follow, index" />
      )}
      <meta property="og:title" content={pageTitle} />
      <meta name="og:description" content={description} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sanyam Dogra" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@sdlord07" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={imageURL} /> */}
    </Head>
  );
};
