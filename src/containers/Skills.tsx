import React, { Fragment } from 'react'

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
    <Fade direction="left" duration={1000}>
      <Container className="text-center my-5 section section-lg">
        <h1 className="h1">{skillsSection.title}</h1>
        <p className="lead">{skillsSection.subTitle}</p>
        <Row>
          <Col lg="6">
            <DisplayLottie animationData={webdev} />
          </Col>
          <Col lg="6">
            <div className="d-flex justify-content-center flex-wrap mb-5">
              {
                skillsSection.softwareSkills.map((skill: any) => {
                  return <Fragment key={skill.skillName}>
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5" id={skill.skillName}>
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
                })
              }
            </div>
            <div>
              {
                skillsSection.skills.map(skill => {
                  return <p>{skill}</p>
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