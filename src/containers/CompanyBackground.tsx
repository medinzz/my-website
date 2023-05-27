import {
  Col,
  Container,
  Row,
} from "reactstrap"

import { Fade } from 'react-awesome-reveal'
import WorkCard from '../components/WorkCard'
import { workExperience } from '../Portfolio'


const CompanyBackground = () => {
  return (
    <section className="section section-lg">
      <Container>
        <Fade direction="left" duration={500}>
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
                  <Col md={6} key={i}>
                    <WorkCard data={data} />
                  </Col>
                )
              })
            }
          </Row>
        </Fade>
      </Container>
    </section>
  )
}

export default CompanyBackground