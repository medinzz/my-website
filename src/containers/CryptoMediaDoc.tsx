import React, { Fragment } from 'react'

import { Fade } from 'react-awesome-reveal'

import {
  Container,
  Row,
  Col
} from "reactstrap"
import cmsignin from '../assets/images/cmsignin.png'
import cmregister from '../assets/images/cmregister.png'
import cmhome from '../assets/images/cmhome.png'


const CryptoMediaDoc = () => {
  return (
    <>
      <Fade direction="left" duration={1000}>
        <Container className="my-5 text-center section section-lg">
          <h1 className="h1">How it works?</h1>
          <p>
            Crypto Media is a social media for cryptocurrency enthusiast. It uses a custom GraphQL API made with Django
            and it's frontend technology uses React.js TypeScript. as of now the website is not yet available because
            the fundamental functionalities are yet to be apply. For now, Here's a quick tour of how the app works.
          </p>
          <div className="py-5">
            <Row>
              <Col lg="6" className="py-5">
                <div className="py-5">
                  <h3 className="pb-2 display-4">
                    Authentication System
                  </h3>
                  <p>
                    Crypto Media use JWT Authentication System which is a great auth system for web.
                  </p>
                </div>
              </Col>
              <Col lg="6">
                <Row>
                  <img className="img-fluid" src={cmsignin} alt="cmsignin.png" />
                </Row>
                <Row>
                  <img className="img-fluid" src={cmregister} alt="cmregister.png" />
                </Row>
              </Col>
            </Row>
          </div>
        </Container>
      </Fade>
      <Fade direction="left" duration={1000}>
        <Container className="my-5 text-center section section-lg">
            <Row>
              <Col lg="6">
                <img className="img-fluid" src={cmhome} alt="cmhome.png" />
              </Col>
              
              <Col lg="6" className="py-5">
                <div className="py-5">
                  <h3 className="pb-2 display-4">
                    The current Home Page
                  </h3>
                  <p>
                    As of now you can only post a phrase (like twitter) about crypto. 
                    Don't worry, I will continue the development of this site and make it available
                    at the web.
                  </p>
                </div>
              </Col>
            </Row>
        </Container>
      </Fade>
    </>
  )
}

export default CryptoMediaDoc