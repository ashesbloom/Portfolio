import React from "react";
import './assets/style/About.scss'
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function About() {
  return (
    <div className="items_wrapper">
      <h1>About Me</h1>
      <div className="about-page">
        <div className="align-items-center">
          <p>
            Greetings! 
            I am a dedicated B.Tech Computer Science student at LPU, actively exploring various engineering domains. 
            My primary focus lies in cybersecurity, where I've successfully delivered multiple projects and acquired substantial skills through online learning. 
            I am committed to continuous growth and look forward to contributing meaningfully in the field as I progress through my academic journey at LPU.
          </p>
          <TypeAnimation
            sequence={[
    "If I am not coding, you can find me: listening to music",
    1000,
    "If I am not coding, you can find me: watching cinema",
    1000,
    "If I am not coding, you can find me: sketching",
    1000,
    "If I am not coding, you can find me: writing",
    1000,
    "If I am not coding, you can find me: playing football",
    1000,
            ]}
            wrapper="p"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <h2>Career Timeline</h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Jan 2024 - present"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Legacy Organization</h3>
            <h4 className="vertical-timeline-element-subtitle">Collage Club</h4>
            <p>
            Oversaw recruitment, onboarding, and employee relations.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="JUL 2023 - MAY 2024"
            iconStyle={{ background: 'rgb(249, 38, 114)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Coding Blocks</h3>
            <h4 className="vertical-timeline-element-subtitle">Collage Club</h4>
            <p>
            I have contributed my knowledge and skills as a web-developer in coding blocks 
associated with 'sunburn' event and gained insights on many industries level work.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default About;