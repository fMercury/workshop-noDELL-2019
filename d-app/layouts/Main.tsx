import * as React from 'react'
import Head from 'next/head'
import Footer from '../components/Footer';
import Header from '../components/Header';

type Props = {
  title?: string,
}

const Layout: React.FunctionComponent<Props> = ({ children, title = 'Blockchain Tandil' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
  }

export default Layout
