import { Fragment } from 'react'

import { Fade } from 'react-awesome-reveal'
import DisplayLottie from '../components/DisplayLottie'
import webdev from '../assets/lottie/webdev.json'

import {
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap"

import { skillsSection } from "../Portfolio"


const Skills = () => {
  return (
    <Fade direction="right" duration={500}>
      <Container className="mt-5 text-center section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6">
            <div className="flex-wrap mb-5 d-flex justify-content-center">
              {
                skillsSection.softwareSkills.map((skill: any, i) => {
                  return (
                    <Fragment key={i}>
                      <div className="mb-5 shadow icon icon-lg icon-shape rounded-circle" id={skill.skillName}>
                        {skill.icon}
                      </div>
                      <UncontrolledTooltip
                        delay={0}
                        placement="bottom"
                        target={skill.skillName}
                      >
                        {skill.skillName}
                      </UncontrolledTooltip>
                    </Fragment>
                  )
                })
              }
            </div>
            <div>
              {
                skillsSection.skills.map((skill, i) => {
                  return <p key={i}>{skill}</p>
                })
              }
            </div>
          </Col>
        </Row>
      </Container>
    </Fade>
  )
}

export default Skills