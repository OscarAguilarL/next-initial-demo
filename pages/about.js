import React from 'react';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

const AboutPage = () => {
  return (
    <MainLayout title="About">
      <h1>About Page</h1>

      <h2 className="title">
        Ir a <Link href="/">Home</Link>
      </h2>

      <p className="description">
        Get started by editing <code className="code">pages/about.js</code>
      </p>
    </MainLayout>
  );
};

export default AboutPage;
