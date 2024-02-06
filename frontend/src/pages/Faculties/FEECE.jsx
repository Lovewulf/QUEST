// FEECE.jsx

import React from 'react';
import './Faculties.css';
import { Card } from 'react-bootstrap';

import ElectricalEngineeringImg from '../../utils/images/art-course.jpg'; // Example image path, replace with actual path
import ElectronicEngineeringImg from '../../utils/images/business-course.jpg'; // Example image path, replace with actual path
import ComputerSystemsImg from '../../utils/images/computer-science-course.jpg'; // Example image path, replace with actual path
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';

const courses = [
    {
        id: 1,
        img: ElectricalEngineeringImg,
        title: 'Electrical Engineering',
        description: 'Dive into the world of electrical engineering with courses focusing on power systems, circuit design, and more.'
    },
    {
        id: 2,
        img: ElectronicEngineeringImg,
        title: 'Electronic Engineering',
        description: 'Explore the field of electronic engineering, covering topics from microelectronics to telecommunications.'
    },
    {
        id: 3,
        img: ComputerSystemsImg,
        title: 'Computer Systems Engineering',
        description: 'Engage with computer systems engineering, blending hardware and software design to create innovative solutions.'
    }
];

function FEECE() {
  return (
    <div className='faculty-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Faculty of Electrical, Electronic & Computer Systems Engineering</h1>
                <p className='text-center w-75 mb-5'>Explore our diverse range of courses in electrical, electronic, and computer systems engineering.</p>
            </div>
        </header>

        <div className='container py-5'>
            <div className='row g-4'>
                {courses.map((course) => (
                    <div key={course.id} className='col-lg-6'>
                        <Card className='text-white shadow scale-hover-effect'>
                            <Card.Img src={course.img} />
                            <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                <Card.Title className='fs-1 text-danger'>{course.title}</Card.Title>
                                <Card.Text className='text-center'>{course.description}</Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </div>
                ))}
            </div>
        </div>

        <div className='bg-dark text-light py-5'>
            <FaqAccordion />
        </div>
    </div>
  )
}

export default FEECE;
