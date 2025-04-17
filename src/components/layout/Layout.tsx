import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import PageTransition from './PageTransition';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="min-h-screen pt-24">{children}</main>
      </PageTransition>
      <Footer />
    </>
  );
} 