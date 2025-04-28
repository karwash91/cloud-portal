'use client';
import type { ReactNode } from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

// Main layout wrapper: renders Navbar and page content
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-full bg-white font-sans antialiased">
      {/* Top navigation */}
      <Navbar />
      {/* Page content */}
      <main className="h-full overflow-auto">
        {children}
      </main>
    </div>
  );
}