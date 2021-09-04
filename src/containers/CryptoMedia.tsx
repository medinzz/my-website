import { Fade } from 'react-awesome-reveal'

import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap"
import cryptomedia from '../assets/images/cryptomedia.gif'


const CryptoMedia = () => {
  return (
    <Fade direction="down" duration={1000}>
      <main ref="main">
        <div className="position-relative">
          <section className="section section-lg section-shaped pb-250">
            <div className="shape shape-style-1 bg-gradient-info">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="py-lg-md d-flex">
              <div className="px-0 col">
              <div className="px-3 pb-5 d-flex">
                  <div>
                      <div className="shadow icon icon-lg icon-shape bg-gradient-white rounded-circle text-info">
                      <i className="ni ni-laptop text-info" />
                      </div>
                  </div>
                  <div className="pl-4">
                      <h4 className="text-white display-3">OJT 2 Website</h4>
                  </div>
              </div>
                <Row>
                  <Col lg="6">
                    <h1 className="text-white display-3">
                      Crypto Media
                    </h1>
                    <p className="text-white lead">
                      The new generation of social media for cryptocurrencies.
                    </p>
                  </Col>
                  <Col lg="6">
                    <img className="img-fluid" src={cryptomedia} alt="cryptomedia.gif" />
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          {/* 1st Hero Variation */}
        </div>
      </main>
    </Fade>
  )
}

export default CryptoMedia
