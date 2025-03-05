import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Img1 from '../assets/html.png';
import Img2 from '../assets/css.png';
import Img3 from '../assets/js.png';
import Img4 from '../assets/java.png';
import f1 from '../assets/react.png';
import f2 from '../assets/express.png';
import d2 from '../assets/mysql.png';
import d1 from '../assets/mongo.png';
import o1 from '../assets/bootstrap.png';
import o2 from '../assets/react-bootsrap.png';
import o3 from '../assets/nodejs.png';
import s1 from '../assets/xampp.png';
import t1 from '../assets/git.png';
import t2 from '../assets/github.png' 
import "./Skill.css"
const Skills = () => {
  return (
    <>
      <Container fluid className='SkillContainer p-5'>
        <Container >
        <b  className="headExp">Skills </b>
          <Row>
            <h5 className='pb-3'>Web Technology :</h5>
            <Col lg={3} className='complete'>
              <img src={Img1} alt="" fluid height={120} />
              <p className='text-lang'>HTML</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={Img2} alt="" fluid height={120}/>
              <p className='text-lang'>CSS</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={Img3} alt="" fluid height={120}/>
              <p className='text-lang'>Javascript</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={Img4} alt="" fluid height={120}/>
              <p className='text-lang'>Core Java</p>
            </Col>
          </Row>
          <Row>
            <h5 className='pb-3'>Frameworks :</h5>
            <Col lg={3} className='complete'>
              <img src={f1} alt="" fluid height={120} />
              <p className='text-lang'>React.js</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={f2} alt="" fluid height={120}/>
              <p className='text-lang'>Express.js</p>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
          </Row>
          <Row>
            <h5 className='pb-3'>Database :</h5>
            <Col lg={3} className='complete'>
              <img src={d1} alt="" fluid height={120} />
              <p className='text-lang'>MongoDb</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={d2} alt="" fluid height={120}/>
              <p className='text-lang'>MySql</p>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
          </Row>
          <Row>
            <h5 className='pb-3'>Others :</h5>
            <Col lg={3} className='complete'>
              <img src={o1} alt="" fluid height={120} />
              <p className='text-lang'>Bootstrap 5</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={o2} alt="" fluid height={120}/>
              <p className='text-lang'>React Bootstrap</p>
            </Col>
            <Col lg={3} className='complete'>
            <img src={o3} alt="" fluid height={120}/>
              <p className='text-lang'>Node.js</p>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
          </Row>
          <Row>
            <h5 className='pb-3'>Server :</h5>
            <Col lg={3} className='complete'>
              <img src={s1} alt="" fluid height={120} />
              <p className='text-lang'>XAMPP</p>
            </Col>
            <Col lg={3} className='complete'>
              
            </Col>
            <Col lg={3} className='complete'>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
          </Row>
          <Row>
            <h5 className='pb-3'>SCM Tools :</h5>
            <Col lg={3} className='complete'>
              <img src={t1} alt="" fluid height={120} />
              <p className='text-lang'>Git</p>
            </Col>
            <Col lg={3} className='complete'>
              <img src={t2} alt="" fluid height={120}/>
              <p className='text-lang'>Git-Hub</p>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
            <Col lg={3} className='complete'>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Skills