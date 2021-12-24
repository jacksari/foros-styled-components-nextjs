import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import { Button } from '../components/ui/Button';

const Home: NextPage = () => {
  return (
    <Layout>
     <h1>Hola mundo</h1>
     <Button/>
    </Layout>
  )
}

export default Home
