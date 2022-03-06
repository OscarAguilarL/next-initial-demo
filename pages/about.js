import React from 'react';
import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout';

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>

      <h2 className="title">
        Ir a <Link href="/">Home</Link>
      </h2>

      <p className="description">
        Get started by editing <code className="code">pages/about.js</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page) {
  return (
    <MainLayout title="About">
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
};

export default AboutPage;
