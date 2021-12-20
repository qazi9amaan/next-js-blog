import '../styles/globals.css'
import Layout from "../components/shared/Layout";
import { useState } from 'react';

function MyApp({ Component, pageProps }) {

  const [title, setTitle] = useState("Home")
  
  pageProps.setTitle = setTitle;
  
  return (
    <Layout title={title}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp
