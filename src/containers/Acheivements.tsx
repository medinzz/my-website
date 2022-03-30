import {
  Container,
  Row,
  Col
} from "reactstrap"
import spaceapps from '../assets/images/spaceapps.png'

import { Fade } from 'react-awesome-reveal'

const Acheivements = () => {
  return (
    <>
      <Fade direction="right" duration={500}>
        <Container className="my-5">
          <Row>
              <Col lg={6}>
                <div className="p-4 d-flex">
                  <div>
                    <div className="shadow icon icon-lg icon-shape bg-gradient-white rounded-circle text-info">
                      <i className="ni ni-paper-diploma text-info" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h4 className="display-3 text-info">Achievements</h4>
                    
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <img className="img-fluid " src={spaceapps} alt="spaceapps.png" />
              </Col>
            </Row>
        </Container>
      </Fade>
    </>
  )
}

export default Acheivements