import type { NextPage } from 'next';
import Layout from '../components/layout/Layout';
import HeaderHome from "../components/home/HeaderHome";
import SectionLiveAction from "../components/home/SectionLiveAction";
import SectionTopSeller from "../components/home/SectionTopSeller";
import ContainerDetails from "../components/home/ContainerDetails";
import {SectionCenter} from "../styles/layout/section";
import TitleSection from "../components/ui/TitleSeccion";

const Home: NextPage = () => {
  return (
    <Layout>
        <HeaderHome/>
        <SectionLiveAction/>
        <SectionTopSeller/>
        <SectionCenter padding>
            <TitleSection title={'Details'} link={'#'}/>
            <ContainerDetails home={true}/>
        </SectionCenter>
    </Layout>
  )
}

export default Home
