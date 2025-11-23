import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./page.css";
import DeliveryIcon from "../../public/images/truck-icon.svg";
import BannerImg from "../../public/images/pizza-img.png";
import Header from "../../src/component/Header";
import Footer from "../../src/component/Footer";
import { FaArrowRightLong } from "react-icons/fa6";
import pizzaImg from "../../public/images/pizza-img.jpg";
import pizzaImg2 from "../../public/images/pizza2.jpg";
import pizzaImg3 from "../../public/images/pizza3.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import ProductSection from "./ProductSection";
function Home() {

  return (
    <>
      <Header />
      {/* banner section start */}
      <section className="banner-sec">
        <Container>
          <Row className="align-items-center">
            <Col lg={7} className="mb-lg-0 mb-4">
              <div className="banner-left-box">
                <div className="banner-badge mb-4">
                  <h6 className="mb-0">
                    <img src={DeliveryIcon} alt="" className="me-2 pe-1" />
                    Fastest Delivery Guaranteed
                  </h6>
                </div>
                <h1 className="display-2 fw-bold">
                  Welcome to <br />
                  <span className="text-yellow"> PETUK </span>
                  Restaurant
                </h1>
                <p className="my-4">
                  Get 10% instant off for all order and $200 signup bonus today
                  for new registration!
                </p>
                <div className="banner-btn d-flex align-itmes-center gap-3">
                  <Link to="#" className="btn theme-btn">
                    order now{" "}
                    <span className="ms-2">
                      <FaArrowRightLong />
                    </span>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={5}>
              <div className="banner-right-box">
                <img src={BannerImg} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* banner section end */}
      {/* ********** Start Pizza Section...*/}
      <ProductSection />
      {/* ********** End Pizza Section...*/}
      <section>
        <Container>
          <div class="mb-2 mb-lg-4 d-md-flex justify-content-between align-items-center">
            <div class="section-title">
              <h3 class="display-5 mb-3 mb-md-0 fw-bold">All Pizza</h3>
            </div>
            <Link class="btn theme-btn" to="/shop">
              View All
            </Link>
          </div>
          <div className="row">
            <div class="col-sm-6 col-lg-4 col-xl-4">
              <div class="shop-box mb-3">
                <div class="shop-wrapper">
                  <div class="shop-image">
                    <Link to="/product-detail">
                      <img src={pizzaImg} alt="title" className="img-fluid" />
                    </Link>
                  </div>
                  <div class="shop-content">
                    <h4>
                      <Link
                        to="/product-detail"
                        className="text-decoration-none text-black"
                      >
                        Paneer 33tikka pizza
                      </Link>
                    </h4>
                    <p class="m-0">Pizza, Desserts, Asian</p>
                  </div>
                </div>
                <div class="shop-bottom">
                  <span class="fw-bold">Delivery Fee : $10</span>
                  <div class="rating-star text-yellow  ">5.00 /5</div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
              <div class="shop-box mb-3">
                <div class="shop-wrapper">
                  <div class="shop-image">
                    <Link to="/product-detail">
                      <img src={pizzaImg2} alt="title" className="img-fluid" />
                    </Link>
                  </div>
                  <div class="shop-content">
                    <h4>
                      <Link
                        to="/product-detail"
                        className="text-decoration-none text-black"
                      >
                        Farmhouse Pizza
                      </Link>
                    </h4>
                    <p class="m-0">Pizza, Desserts, Asian</p>
                  </div>
                </div>
                <div class="shop-bottom">
                  <span class="fw-bold">Delivery Fee : $20</span>
                  <div class="rating-star text-yellow  ">5.00 /5</div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 col-xl-4">
              <div class="shop-box mb-3">
                <div class="shop-wrapper">
                  <div class="shop-image">
                    <Link to="/product-detail">
                      <img src={pizzaImg3} alt="title" className="img-fluid" />
                    </Link>
                  </div>
                  <div class="shop-content">
                    <h4>
                      <Link
                        to="/product-detail"
                        className="text-decoration-none text-black"
                      >
                        Delicious veggie pizza
                      </Link>
                    </h4>
                    <p class="m-0">Pizza, Desserts, Asian</p>
                  </div>
                </div>
                <div class="shop-bottom">
                  <span class="fw-bold">Delivery Fee : $30</span>
                  <div class="rating-star text-yellow  ">5.00 /5</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* all pizaa section end */}

      {/* order step css start */}
      <section class="order-step-area pt-0">
        <div class="container">
          <div class="sec-title text-center mb-4 pb-5">
            <h2 class="separator display-5 fw-bold position-relative">
              3 Steps Delivery
            </h2>
          </div>
          <div class="order-step-wrapper">
            <div class="row g-lg-0">
              <div class="col-md-6 col-lg-4">
                <div class="order-step-box border-end text-center mt-3 mt-lg-0">
                  <div class="order-step-icon mb-4">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/a05f8c81384cd43ee9b0a61bff5baf9b4a2c6f70/1489b/assets/images/order-step-icon1.svg"
                      alt="title"
                    />
                  </div>
                  <div class="order-step-content">
                    <h4 class="mb-2">Choose your food</h4>
                    <p class="m-0">
                      The wanted wow statement pile a windshield we a often for
                      to tried met.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="order-step-box border-end text-center mt-3 mt-lg-0">
                  <div class="order-step-icon mb-4">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/da235f9f2f51b1f0ef19adeea85b3ed9a47a5a25/6bc71/assets/images/order-step-icon2.svg"
                      alt="title"
                    />
                  </div>
                  <div class="order-step-content">
                    <h4 class="mb-2">Pay your bill</h4>
                    <p class="m-0">
                      Then the one a pervasively hell a an it I higher a some
                      back material didn't rationally.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-4">
                <div class="order-step-box text-center mt-3 mt-lg-0">
                  <div class="order-step-icon mb-4">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/ac08baf1e2fa86c4bdd511a465bd9473786f85d0/42be6/assets/images/order-step-icon3.svg"
                      alt="title"
                    />
                  </div>
                  <div class="order-step-content">
                    <h4 class="mb-2">Get the delivery</h4>
                    <p class="m-0">
                      Even supported their not depend be and of when we the
                      might offering were this ridden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* order step css end */}

      {/* fast delivery section start*/}
      <section class="order-area order-box-shape pt-0">
        <div class="container">
          <div class="sec-title text-center mb-4 pb-5">
            <h2 class="separator display-5 fw-bold position-relative">
              Fastest Delivery
            </h2>
          </div>
          <div class="row align-items-center">
            <div class="col-md-6 offset-md-1 order-md-1">
              <div class="order-outline-box mt-3">
                <div class="order-outline-icon">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/410245a192b4d598036d08360002956643351381/d03ee/assets/images/order-outline-con1.svg"
                    alt="title"
                  />
                </div>
                <div class="order-outline-content">
                  <h4>Find nearest Restaurants</h4>
                  <p class="m-0">
                    One with to of and behave. That onto and she desires a
                    concept of through with when reached will so you{" "}
                  </p>
                </div>
              </div>
              <div class="order-outline-box mt-3">
                <div class="order-outline-icon">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/610d09e174d292f5d5f2b57be173040e67c33064/472cb/assets/images/order-outline-con2.svg"
                    alt="title"
                  />
                </div>
                <div class="order-outline-content">
                  <h4>Order food from menu</h4>
                  <p class="m-0">
                    One with to of and behave. That onto and she desires a
                    concept of through with when reached will so you{" "}
                  </p>
                </div>
              </div>
              <div class="order-outline-box mt-3">
                <div class="order-outline-icon">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/4cca27c232204e1152d274c5917e30b75529382b/1cca2/assets/images/order-outline-con3.svg"
                    alt="title"
                  />
                </div>
                <div class="order-outline-content">
                  <h4>Pay your food bill</h4>
                  <p class="m-0">
                    One with to of and behave. That onto and she desires a
                    concept of through with when reached will so you{" "}
                  </p>
                </div>
              </div>
              <div class="order-outline-box mt-3">
                <div class="order-outline-icon">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/29a08bbfe7778b5a61c2143d4e365183087bdc3f/dbfea/assets/images/order-outline-con4.svg"
                    alt="title"
                  />
                </div>
                <div class="order-outline-content">
                  <h4>Get delivery within 50 mins</h4>
                  <p class="m-0">
                    One with to of and behave. That onto and she desires a
                    concept of through with when reached will so you{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 order-md-12">
              <div class="order-icon-shape">
                <div class="order-shape-item shape-1">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/b47f15c512110e1e10a097012fb882323958f284/f8644/assets/images/shape/10.svg"
                    alt="title"
                  />
                </div>
                <div class="order-shape-item shape-2">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/b47f15c512110e1e10a097012fb882323958f284/f8644/assets/images/shape/10.svg"
                    alt="title"
                  />
                </div>
                <div class="order-shape-item shape-3">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/503c235c0149c8862286ec72192c1dce858e015f/bd152/assets/images/shape/11.svg"
                    alt="title"
                  />
                </div>
                <div class="order-shape-item shape-4">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/b47f15c512110e1e10a097012fb882323958f284/f8644/assets/images/shape/10.svg"
                    alt="title"
                  />
                </div>
              </div>
              <div class="order-delivery-man">
                <img
                  data-aos="fade-up"
                  src="https://d33wubrfki0l68.cloudfront.net/018259f70525191891339c090a1766cc692cb344/f3703/assets/images/delivery-image.png"
                  alt="title"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* fast delivery section end */}

      {/* order now section start */}
      <section class="call-to-action-area  bg-dark">
        <div class="container">
          <div class="row">
            <div class="col-md-8 m-auto">
              <div class="call-to-action-content text-center">
                <span class="badge bg-success mb-1">FREE DELIVERY</span>
                <h2 class="display-5 text-white mb-2 fw-bold">
                  Cheese Pizza Available
                </h2>
                <p class="text-white mb-5">
                  That he high longer even sitting more the was agency; Law,
                  does thin for a details warp
                </p>
                <Link class="btn theme-btn" to="/">
                  Order Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* order noe section end */}

      {/* blog section start */}
      <section class="blog-area  bg-light">
        <div class="container">
          <div class="sec-title text-center mb-4 pb-5">
            <h2 class="separator display-5 fw-bold position-relative">
              Latest Blogs
            </h2>
          </div>
          <div class="row infinite-container">
            <div class="col-md-6 col-lg-4 col-xl-3 blog">
              <div
                class="blog-box mt-3 aos-init aos-animate"
                data-aos="fade-down"
              >
                <div class="blog-image">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/c2bcd9dba69293a50c7004a437265a574d3fc53b/f8b23/assets/images/blog/1.jpg"
                    alt="title"
                    class="img-fluid"
                  />
                </div>
                <div class="blog-content">
                  <div class="blog-author mb-2">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/a8ff5918b8af7a0851c6b608edd8be2cbe8ccb46/45c31/assets/images/author/1.jpg"
                      alt="title"
                      class="img-fluid"
                    />
                    <a href="/author">Cody Fisher</a>
                  </div>
                  <h5 class="mb-2">
                    <a class="text-white" href="/single">
                      15 things you need to know about pizza today
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 blog">
              <div
                class="blog-box mt-3 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="blog-image">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/1834467e1338c790dd7e4c5869ce673d8a81fab4/84ab1/assets/images/blog/2.jpg"
                    alt="title"
                    class="img-fluid"
                  />
                </div>
                <div class="blog-content">
                  <div class="blog-author mb-2">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/3e660afddaa3541200abbb5f0c06c8792b5ceb77/8520e/assets/images/author/2.jpg"
                      alt="title"
                      class="img-fluid"
                    />
                    <a href="/author">Wade Warren</a>
                  </div>
                  <h5 class="mb-2">
                    <a class="text-white" href="/single">
                      Ten useful tips from experienced pizza veteran
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 blog">
              <div
                class="blog-box mt-3 aos-init aos-animate"
                data-aos="fade-down"
              >
                <div class="blog-image">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/d7e3122cde96f28e1ed9ee709c885a5582975c5a/8baf1/assets/images/blog/3.jpg"
                    alt="title"
                    class="img-fluid"
                  />
                </div>
                <div class="blog-content">
                  <div class="blog-author mb-2">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/c35ff1466a89c25248edebaa9211c9a5616f2a64/fb011/assets/images/author/3.jpg"
                      alt="title"
                      class="img-fluid"
                    />
                    <a href="/author">Jacob Jones</a>
                  </div>
                  <h5 class="mb-2">
                    <a class="text-white" href="/single">
                      Why pizza had been so popular till now?
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 col-xl-3 blog">
              <div
                class="blog-box mt-3 aos-init aos-animate"
                data-aos="fade-up"
              >
                <div class="blog-image">
                  <img
                    src="https://d33wubrfki0l68.cloudfront.net/c263fe45812f3e3f788965542c9be2ab517ec51d/51f59/assets/images/blog/4.jpg"
                    alt="title"
                    class="img-fluid"
                  />
                </div>
                <div class="blog-content">
                  <div class="blog-author mb-2">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/8b9dccce954cdf38c145f82685be816fbaf222db/92005/assets/images/author/4.jpg"
                      alt="title"
                      class="img-fluid"
                    />
                    <a href="/author">Esther Howard</a>
                  </div>
                  <h5 class="mb-2">
                    <a class="text-white" href="/single">
                      The millionaire guide on pizza to help you get rich
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 mt-lg-7">
            <Link to="/blog" class="btn theme-btn">
              All Blogs
            </Link>
          </div>
        </div>
      </section>
      {/* blog section end */}
      <Footer />
    </>
  );
}

export default Home;
