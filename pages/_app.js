import React, { useState } from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  const [open, setopen] = useState(false);
  return (
    <Layout setopen={setopen}>
       <Component {...pageProps} open={open} setopen={setopen} />
    </Layout>
  )
}

export default MyApp;
