import {
  Container,
  Row,
  Col
} from "reactstrap"

import me from '../assets/images/me.jpg'


const MeContainer = () => {
  return (
    <section>
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
              <Row>
                <Col lg="6" className="pt-5">
                  <h1 className="text-white display-3">
                    Again, I'm Joshua Merwin Medina
                  </h1>
                  <p className="text-white lead">
                    you can always email me for opportunities at: medinajoshuamerwin@gmail.com
                  </p>
                </Col>
                <Col lg="6">
                  <img className="mb-4 shadow rounded-circle img-center img-fluid shadow-lg--hover w-50" src={me} alt="me.png" />
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </div>
    </section>
  )
}

export default MeContainer
