import * as React from 'react'
import Layout from '../layouts/Main'
import List from '../components/NumberList';
import { WithMetamask } from '../components/web3';

const IndexPage: React.FunctionComponent = () => (
  <Layout title="Home | demo app for Blockchain Tandil">
    <WithMetamask> 
      <List />
    </WithMetamask>
  </Layout>
)

export default IndexPage;
