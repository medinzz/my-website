import React from 'react'
import build from "../assets/lottie/build.json"

import { SkillBars } from "../Portfolio"
import {
  Container,
  Row,
  Progress,
  Col
} from "reactstrap"

import { Fade } from 'react-awesome-reveal'

import GreetingLottie from "../components/DisplayLottie"


const ProgrammingProficiency = () => {
  return (
    <Container className="section section-lg">
      <Fade direction="left" duration={500}>
        <Row>
          <Col lg="6">
            <h1 className="h1">Programming Proficiency</h1>
            {
              SkillBars.map((skill: any) => {
                return <div className="progress-info" key={skill.Stack}>
                  <div className="progress-label">
                    <span>{skill.Stack}</span>
                  </div>
                  <div className="progress-percentage">
                    <span>{skill.progressPercentage}%</span>
                  </div>
                  <Progress max="100" value={skill.progressPercentage} color="info" />
                </div>
              })
            }
          </Col>
          <Col lg="6">
            <GreetingLottie animationData={build} />
          </Col>
        </Row>
      </Fade>
    </Container>
  )
}

export default ProgrammingProficiency