import Layout from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/css/dashlite.css';


const App = ({ Component, pageProps }: AppProps) => {

  useEffect(()=>{
    localStorage.setItem('user', 'No')
  },[])

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
