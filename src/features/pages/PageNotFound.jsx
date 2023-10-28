import React from 'react';
import Heading from '../../ui/Heading';
import Layout from '../../ui/Layout';
import Header from '../setup/ui/Header';
import Explanation from '../setup/ui/Explanation';

export default function PageNotFound() {
  return (
    <Layout>
      <Header />
      <Heading customClass="pt-8 text-center">Page Not Found</Heading>
      <Explanation>
        <p className="mb-8 text-xl text-slate-800 px-4 pt-4 text-left">
          Sorry, the page you are looking for does not exist.
        </p>
      </Explanation>
    </Layout>
  );
}
