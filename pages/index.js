import Head from 'next/head'
//Componentes
import { Reset } from 'styled-reset'
import { Tema } from '../Components/Tema'
import {
  Container,
  Col,
  Row
} from '../Components/Grids'
import {
  HomeHeader,
  Name,
  Slogan
} from './style'

export default function Home() {
  return (
    <React.Fragment>
      <Reset />
      <Tema>
        <Head>
          <title>André Rodrigues | Web Specialist</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content=""/>
          <meta name="description" content=""/>
          <meta name="keywords" content=""/>
          <meta name="robots" content="index, follow"/>
          <meta property="og:type" content="profile"/>
          <meta property="og:title" content=""/>
          <meta property="og:url" content=""/>
          <meta property="og:image" content=""/>
        </Head>
        <HomeHeader>
          <Container className="Space_Header_Home">
            <Row>
              <Col Val="6">
                <Name>André <br/> Rodrigues</Name>
                <Slogan>Web Specialist</Slogan>
              </Col>
            </Row>
          </Container>
        </HomeHeader>
      </Tema>
    </React.Fragment>
  )
}
