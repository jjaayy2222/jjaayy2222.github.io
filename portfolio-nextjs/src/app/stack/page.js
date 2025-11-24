import React from 'react';
import fs from 'fs';

export default function StackPage() {
  const filePath = '/Users/jay/jjaayy2222.github.io/temp/2025-11/11_24/stack.md';
  const html = fs.readFileSync(filePath, 'utf8');
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
