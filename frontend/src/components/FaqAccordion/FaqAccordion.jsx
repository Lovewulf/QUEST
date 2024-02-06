import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently asked questions</h2>
            <p className='text-center mb-5'>At Quaid-e-Awam University of Engineering, Science and Technology (QUEST), Nawabshah, we understand that choosing the right university is a significant decision. That's why we've compiled a list of frequently asked questions to help you get to know more about what makes QUEST an exceptional place for education and personal growth. From our academic offerings and global collaborations to student support services and financial aid, these questions cover a range of topics to give you a comprehensive overview of life and learning at QUEST. We invite you to explore these questions to find out more about our commitment to excellence in education and student well-being.</p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>What unique opportunities does QUEST offer for international exposure?</Accordion.Header>
                    <Accordion.Body>
                    QUEST has established collaborations with renowned universities across various countries, including the USA, Turkey, Malaysia, and Germany. These partnerships offer our students and faculty unique opportunities for global exchanges, research collaborations, and access to diverse educational resources
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>How does QUEST ensure the well-being of its students?</Accordion.Header>
                    <Accordion.Body>
                    We prioritize the holistic development of our students. With state-of-the-art sports facilities, a comprehensive medical dispensary, and comfortable hostel accommodations, we ensure a supportive and enriching campus environment. Our focus extends beyond academics to include physical health, mental well-being, and personal growth.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>What academic programs does QUEST offer?</Accordion.Header>
                    <Accordion.Body>
                    QUEST offers a wide range of programs in engineering, science, and technology, with 28 departments under five faculties. Each department is equipped with modern facilities and experienced faculty, ensuring a comprehensive and up-to-date education.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>How does QUEST support students financially?</Accordion.Header>
                    <Accordion.Body>
                    We offer various financial assistance options, including scholarships and loans from both government and private organizations. Our Financial Aid office works diligently to support meritorious and needy students, ensuring that financial constraints do not hinder educational pursuits.
                    </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey='4'>
                    <Accordion.Header>What are the library and IT facilities like at QUEST?</Accordion.Header>
                    <Accordion.Body>
                    Our Central Library is well-stocked with a vast collection of books and journals, and it's equipped with a state-of-the-art reading environment. We also offer extensive IT services, including high-speed internet, a digital library, and hardware and software support, to facilitate advanced learning and research.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion;