import {
  Col,
  Container,
  Row,
} from "reactstrap"

import { Fade } from 'react-awesome-reveal'
import WorkCard from '../components/WorkCard'
import { workExperience } from '../Portfolio'
import coe from '../assets/images/CoE RightValley.jpg'

const CompanyBackground = () => {
  return (
    <section className="section section-lg">
      <Container>
        <Fade direction="left" duration={1000}>
          <div className="p-4 d-flex">
            <div>
              <div className="shadow icon icon-lg icon-shape bg-gradient-white rounded-circle text-info">
                <i className="ni ni-briefcase-24 text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info">Company Background</h4>
            </div>
          </div>
          <Row>
            {
              workExperience.map((data, i) => {
                return (
                  <Col md={6}>
                    <WorkCard key={i} data={data} />
                  </Col>
                )
              })
            }
          </Row>
        </Fade>
      </Container>

      <Container className="mt-5">
        <Fade direction="right" duration={1000}>
          <Row>
            <Col lg={6}>
              <div className="p-4 mt-5 d-flex">
                <div>
                  <div className="shadow icon icon-lg icon-shape bg-gradient-white rounded-circle text-info">
                    <i className="ni ni-paper-diploma text-info" />
                  </div>
                </div>
                <div className="pl-4">
                  <h4 className="display-3 text-info">Certificate of Employment</h4>
                  
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <img className="img-fluid " src={coe} alt="CoE RightValley.jpg" />
            </Col>
          </Row>
        </Fade>
      </Container>
    </section>
  )
}

export default CompanyBackground