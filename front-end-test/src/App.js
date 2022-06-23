import './App.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Navbar, Container, Nav, Form, FormControl, Breadcrumb, Row, Col, Card, Button, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';

const App = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch('https://demo2.meals4u.net/fe/api.test.php');

        const resJson = await res.json();

        setCategories(resJson.categories);
      }
      catch (e) {
        console.error(e);
      }
    };

    fetchApi();
  }, [categories])


  return (
    <div className="App mx-4 px-4">
      <header>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#home">
              <Image
                src="https://dummyimage.com/600x400/000/fff"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Form className="d-flex col-9">
              <FormControl
                type="search"
                placeholder="Search free high-resolution photos"
                className="me-2 px-4 mx-4"
                aria-label="Search"
              />
            </Form>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                navbarScroll
              >
                <Nav.Link href="#action1">Explore</Nav.Link>
                <Nav.Link href="#action2">Advertise</Nav.Link>
                <Nav.Link href="#action2">Blog</Nav.Link>
                <Nav.Link href="#action2"><b>Log In</b></Nav.Link>
                <Nav.Link href="#action2"><b>Sign Up</b></Nav.Link>
              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <section className='my-5'>
        <Container fluid>
          <Breadcrumb>
            <Breadcrumb.Item active>Explore</Breadcrumb.Item>
            <Breadcrumb.Item active>Images</Breadcrumb.Item>
            <Breadcrumb.Item active><span className="bread">Food</span></Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </section>

      <section className='mt-5'>
        <Container fluid>
          <Row>
            <Col>
              <h1 className="main_head">
                Food images & pictures
              </h1>
            </Col>
          </Row>
          <Row className='my-2'>
            <Col className='col-lg-6 col-sm-12'>
              <p className="main_para">
                Stunningly delicious street food, magnificent banquets, quiet family dinners: each is beautiful in it's own
                right. Unsplash captures that beauty, and lets you choose from a curated selection of the finest food images
                on the web (and always free).
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='my-5'>
        <Container fluid>
          <Row>
            <Col className='col-lg-7 col-sm-12'>
              <Row>
                <Col className='col-lg-2 col-sm-12'>
                  <h6 className="main_part">Nature Images</h6>
                </Col>
                <Col className='col-lg-2 col-sm-12'>
                  <h6 className="main_part">Stock Images</h6>
                </Col>
                <Col className='col-lg-2 col-sm-12'>
                  <h6 className="main_part">App Images</h6>
                </Col>
                <Col className='col-lg-3 col-sm-12'>
                  <h6 className="main_part">Food Background</h6>
                </Col>
                <Col className='col-lg-2 col-sm-12'>
                  <h6 className="main_part">Religion Images</h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section >

      <section className='my-5'>
        <Container fluid>
          <h3 className="main_head2">Popular Categories </h3>

          <Row>
            <Col className='col-lg-12 col-sm-12'>
              <Row>
                {
                  categories.map(category => (
                    <Col className='col-lg-2 col-sm-12' key={`category-${category}`}>
                      <h6 className="main_part3 my-3">{category}</h6>
                    </Col>
                  ))
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </section >

      <section className='my-5'>
        <Container fluid>
          <Row className='my-2'>
            <Col>
              <h3 className="main_head2">Download Free Photos & Images </h3>
            </Col>
          </Row>

          <Row className='my-3'>
            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/200/300/?blur" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/200/300" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/seed/picsum/200/300" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='my-3'>
            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/200/300/?blur" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/200/300" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-4'>
              <Card className='col-lg-4 col-sm-12' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/seed/picsum/200/300" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className='my-3'>
            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/200/300/?blur" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/200/300" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col className='col-lg-4 col-sm-12'>
              <Card className='col-4' style={{ width: '38rem' }}>
                <Card.Img variant="top" style={{ height: '28rem' }} src="https://picsum.photos/seed/picsum/200/300" />
                <Card.Body>
                  <Card.Title>Food Photo & Image</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="outline-secondary">Download</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='my-5'>
        <Container fluid className='col-sm-12'>
          <p className="last_para"> <strong>Browse premium images on iStock </strong> | 20% off at iStock</p>
        </Container>
      </section>

      <footer>
        <Container fluid>
          <Row>
            <Col className='col-lg-3 col-sm-12'>
              <h3 className='mb-5'>Unsplash</h3>
              <p>Beautiful, free images gifted by the world’s
                most generous community of photographers. Better than any royalty
                free or stock photos.</p>
              <h5>About</h5>
              <h5>Blog</h5>
              <h5>Community</h5>
              <h5>Join the team</h5>
              <h5>Developers/API</h5>
              <h5>Press</h5>
              <h5>Help Center</h5>
            </Col>
            <Col className='col-lg-3 col-sm-12'>
              <h3 className='mb-5'>Product</h3>
              <h5>Explore</h5>
              <h5>Unsplash Awards</h5>
              <h5>Unsplash for Education</h5>
              <h5>Unsplash for iOS</h5>
              <h5>Apps & Plugins</h5>
            </Col>
            <Col className='col-lg-3 col-sm-12'>
              <h3 className='mb-5'>Popular</h3>
              <h5>Backgrounds</h5>
              <h5>Free Images</h5>
              <h5>Free Stock Photos</h5>
              <h5>Happy Birthday Images</h5>
              <h5>Cool Photos</h5>
              <h5>Nature Pictures</h5>
              <h5>Black Backgrounds</h5>
              <h5>White Backgrounds</h5>
              <h5>Textures</h5>
              <h5>Desktop Backgrounds</h5>
            </Col>
            <Col className='col-lg-3 col-sm-12'>
              <h3 className='mb-5'>Wallpapers</h3>
              <h5>HD Wallpapers</h5>
              <h5>4K Wallpapers</h5>
              <h5>Iphone Wallpapers</h5>
              <h5>Cool Wallpapers</h5>
              <h5>Cute Wallpapers</h5>
              <h5>Live Wallpapers</h5>
              <h5>PC Wallpapers</h5>
              <h5>Black Wallpapers</h5>
              <h5>Ipad Wallpapers</h5>
              <h5>Desktop Wallpapers</h5>

            </Col>
          </Row>
          <hr></hr>

          <Row>
            <Col className='col-lg-3'>
              <Row>
                <Col className='col-lg-2 col-sm-12'>
                  <p>Privacy Policy</p>
                </Col>
                <Col className='col-lg-2 col-sm-12'>
                  <p> Terms</p>
                </Col>
                <Col className='col-lg-2 col-sm-12'>
                  <p>Security</p>
                </Col>
              </Row>
            </Col>

            <Col className='col-6'></Col>

            <Col className='col-lg-3'>
              <Row>
                <Col className='col-1'>
                  <FaTwitter />
                </Col>
                <Col className='col-1'>
                  <FaFacebook />
                </Col>
                <Col className='col-1'>
                  <FaInstagram />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Container fluid>
              <p className="last_para2">Download free <u className="bread">(do whatever you want)</u> high-resolution photos. <span className="link">Learn more.</span></p>
            </Container>
          </Row>

        </Container>
      </footer>
    </div >
  );
}

export default App;
