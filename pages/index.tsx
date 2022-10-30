import { Spacer } from '@nextui-org/react';
import type { NextPage } from 'next';
import ComicsList from '../components/ComicsList';
import MainNavbar from '../components/MainNavbar';

const Home: NextPage = () => {

  return (
    <div>
      <MainNavbar />
      <Spacer y={1} />
      <ComicsList />
    </div>
  )
}

export default Home
