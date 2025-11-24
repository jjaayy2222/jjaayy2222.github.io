import React from 'react';
import { loadFramerPage } from '@/app/lib/loadFramerPage';
import Head from 'next/head';

export default function ProjectPage() {
  // FIX: Using a safe relative path. You should ensure 'src/app/content/project.md' exists.
  const { headElements, bodyHtml } = loadFramerPage('src/app/content/project.md');

  return (
    <>
      <Head>{headElements}</Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
