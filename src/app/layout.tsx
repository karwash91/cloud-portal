// src/app/layout.tsx
import './globals.css';
import type { ReactNode } from 'react';
import Layout from '@/components/Layout';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-white">
      <body className="h-full">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}