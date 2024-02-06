import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
//import ChooseSection from '../../components/ChooseSection/ChooseSection';
//import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
    {
        id: 1,
        img: [Blog1Img],
        title: 'Blog 1',
       description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 2,
        img: [Blog2Img],
        title: 'Blog 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 3,
        img: [Blog3Img],
        title: 'Blog 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
        <div className='container d-flex flex-column align-items-center'>
  <h2>Welcome To</h2>
  <h1 className='text-center fw-semibold'>Quaid-e-Awam University of Engineering, Science and Technology, Nawabshah</h1>
  
  <h3 className="text-center fw-bold mt-4">Vision</h3>
  <p className="text-center">“To produce professional graduates to cater to the socio-economic requirements of the national and international market for sustainable development.”</p>
  
  <h3 className="text-center fw-bold">Mission</h3>
  <p className="text-center">“To provide quality and state-of-the-art Education to the students in the prescribed areas of Engineering, Science & Technology, in order to make them outstanding professionals and better human beings; so that they become capable of contributing effectively and amicably towards sustainable development.”</p>
  
  <div className='d-flex flex-column flex-sm-row align-items-center justify-content-center'>
    <Link to="/courses">
      <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Our Courses</button>
    </Link>
    <Link to="/contact">
      <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
    </Link>
  </div>
</div>


        </header>

        <div className='py-5 bg-light'>
        <div className="container">
          <h2 className='text-center text-capitalize mb-5'>Latest News and Updates</h2>
          <div className='row g-4'>
            {/* News Item 1 */}
            <div className='col-lg-4'>
              <Card className='h-100 shadow'>
                <Card.Body>
                  <Card.Title>5th International Workshop on Functional Reverse Engineering</Card.Title>
                  <Card.Text>
                    Recent successful hosting of the 5th International Workshop on Functional Reverse Engineering with MoUs signed between participating universities. Check our picture gallery for event highlights.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* News Item 2 */}
            <div className='col-lg-4'>
              <Card className='h-100 shadow'>
                <Card.Body>
                  <Card.Title>14th Academic Convocation (2024)</Card.Title>
                  <Card.Text>
                    Application for 14th Academic Convocation-2024 is now open. Deadline for submission with Regular Fee is 28-December-2023.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>

            {/* News Item 3 */}
            <div className='col-lg-4'>
              <Card className='h-100 shadow'>
                <Card.Body>
                  <Card.Title>Circular for 23-Batch Students</Card.Title>
                  <Card.Text>
                    Announcement for 23-Batch students regarding the opening of a new bank account. Check the circular for more details.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>

        <div className="py-5">
            <FaqAccordion />
        </div>

        {/* Blog Section commented out */}
      {/*
      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column align-items-center'>
          <h2 className='text-center text-capitalize mb-5'>Latest on the blog</h2>
          <div className='row g-4'>
            {blogs.map((blog) => (
              <div key={blog.id} className='col-md-6 col-lg-4'>
                <Link to="/blog" className='text-decoration-none'>
                  <Card className='h-100 shadow scale-hover-effect'>
                    <Card.Img variant="top" src={blog.img} />
                    <Card.Body className='p-md-5'>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/blog">
            <button type='button' className='btn btn-danger btn-lg mt-5'>Read More Blogs</button>
          </Link>
        </div>
      </div>
      */}
    </div>
  );
}

export default Home;