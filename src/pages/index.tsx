import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import ContactForm from '@/components/sections/ContactForm';

export default function Home() {
  return (
    <>
      <Head>
        <title>Verde Vista Landscaping | Dallas Landscaping Experts</title>
        <meta name="description" content="Since 2019, Verde Vista has delivered lush, expertly-crafted landscaping in Dallas. From lawn care to full backyard makeovers, we bring nature to your doorstep." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Dallas landscaping, lawn care, sod installation, tree trimming, paver walkways, sprinkler repair" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Hero />
        <Services />
        <Testimonials />
        <ContactForm />
      </Layout>
    </>
  );
} 