// src/app/lib/loadFramerPage.js
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import React from 'react';

/**
 * Load a Framer-exported HTML file and split its <head> and <body> content.
 * Returns an object with `headElements` (array of React nodes) and `bodyHtml` (string).
 */
export function loadFramerPage(mdPath) {
  const absolutePath = path.resolve(mdPath);
  const raw = fs.readFileSync(absolutePath, 'utf8');
  // Extract <head>...</head>
  const headMatch = raw.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = raw.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const headContent = headMatch ? headMatch[1] : '';
  const bodyContent = bodyMatch ? bodyMatch[1] : raw; // fallback to whole file

  // Convert head HTML string to React elements using dangerouslySetInnerHTML inside a wrapper.
  // We'll split by <title> and meta/link/style/script tags.
  const titleMatch = headContent.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : undefined;

  // Extract other tags (meta, link, style, script) and render them via dangerouslySetInnerHTML.
  const otherHead = headContent.replace(/<title[^>]*>[^<]*<\/title>/i, '');

  const headElements = (
    <>
      {title && <title>{title}</title>}
      <div dangerouslySetInnerHTML={{ __html: otherHead }} />
    </>
  );

  return { headElements, bodyHtml: bodyContent };
}
