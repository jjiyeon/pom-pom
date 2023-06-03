import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Main />
      <Nav />
    </>
  )
}

export default Home
