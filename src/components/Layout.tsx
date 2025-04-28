'use client';
import type { ReactNode } from 'react';

import Navbar from './Navbar';

export default function Layout({ children }: LayoutProps) {
  return (
    <Navbar />
  );
}

// Props type for the Layout component
interface LayoutProps {
  children: ReactNode;
}