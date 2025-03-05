import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate(); // Initialize navigation function

  return (
    <>
      <Container fluid className='homeContainer pt-4 pb-4'>
        <Container className='back-home'>
          <b className='text-top'>I'm a</b><br />
          <b className='text-sec'>
            <span>MERN Full Stack Web Developer<b>.</b></span>
          </b><br />
          <button 
            className='button-project mt-4'
            onClick={() => navigate('/projects')} // Navigate to projects page
          >
            Previous Projects
          </button>
        </Container>
      </Container>
    </>
  );
};

export default Home;
