import React from 'react';
import Head from 'next/head';
import { loadFramerPage } from '@/app/lib/loadFramerPage';

export default function AboutPage() {
  const { headElements, bodyHtml } = loadFramerPage('src/app/content/about.md');
  return (
    <>
      <Head>{headElements}</Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
