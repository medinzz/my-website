import React from 'react'
import EducationCard from "../components/EducationCard"
import { educationInfo } from "../Portfolio"
import {
    Container,
    Row,
    Col
} from "reactstrap"


const EducationalBackground = () => {
    return ( 
        <section className="pb-0 my-5 section bg-gradient-info">
            <Container className="py-5">
                <div className="px-3 d-flex">
                    <div>
                        <div className="shadow icon icon-lg icon-shape bg-gradient-white rounded-circle text-info">
                        <i className="ni ni-books text-info" />
                        </div>
                    </div>
                    <div className="pl-4">
                        <h4 className="text-white display-3">Education</h4>
                    </div>
                </div>
                <Row className="row-grid align-items-center">
                    {
                        educationInfo.map((info: any) => {
                            return  <Col className="order-lg-1" lg="6"  key={info.schoolName}><EducationCard education={info} /></Col>
                        })
                    }
                </Row>
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
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
     )
}
 
export default EducationalBackground