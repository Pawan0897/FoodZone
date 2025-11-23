import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";

function Checkout() {
  return (
    <>
      <Header />
      <section className="breadcrum">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="display-5 fw-bold text-capitalize text-center">
                checkout
              </h2>
              <ul className="list-unstyled d-flex align-items-center gap-1 justify-content-center mt-2">
                <li>
                  <Link
                    to="/"
                    className="text-capitalize text-decration-none text-yellow fw-bold"
                  >
                    home
                  </Link>
                </li>
                <li>
                  <RiArrowRightDoubleFill />
                </li>
                <li className="text-capitalize fw-bold">checkout</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="checkout-sec pb-0">
        <Container>
          <Row>
            <Col lg={8} md={7}>
              <div class="pe-md-7">
                <h4 class="mb-3">Billing Details</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="mb-2" for="firstname">
                        First Name <span class="text-danger">*</span>
                      </label>
                      <input type="text" id="firstname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="mb-3">
                      <label class="mb-2" for="lastname">
                        Last Name <span class="text-danger">*</span>
                      </label>
                      <input type="text" id="lastname" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="company">
                        Company Name (optional)
                      </label>
                      <input type="text" id="company" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="company">
                        Country / Region <span class="text-danger">*</span>
                      </label>
                      <select class="form-select">
                        <option selected="">United Kingdom (UK)</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="address">
                        Street Address <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        id="address"
                        class="form-control mb-3"
                        placeholder="House number and street name"
                      />
                      <input
                        type="text"
                        id="street"
                        class="form-control"
                        placeholder="Apartment, suite, unit, etc. (optional)"
                      />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="town">
                        Town / City <span class="text-danger">*</span>
                      </label>
                      <input type="text" id="town" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="country">
                        County (optional)
                      </label>
                      <input type="text" id="country" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="postcode">
                        Postcode <span class="text-danger">*</span>
                      </label>
                      <input type="text" id="postcode" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="phone">
                        Phone <span class="text-danger">*</span>
                      </label>
                      <input type="number" id="phone" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <label class="mb-2" for="email">
                        Email Address <span class="text-danger">*</span>
                      </label>
                      <input type="email" id="email" class="form-control" />
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="mb-3">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label class="form-check-label" for="flexCheckDefault">
                          Create an account
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={5}>
              <div class="payment-method-box mb-4 mb-md-7">
                <h5 class="mb-4">Payment Method</h5>
                <div class="payment-accordion accordion accordion-flush" id="accordionF">
                  <div class="accordion-item">
                    <div class="accordion-header">
                      <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-3">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="check-radio" id="cash" />
                          <label class="form-check-label" for="cash">
                            Cash on Delivery
                          </label>
                        </div>
                      </div>
                    </div>
                    <div id="flush-3" class="accordion-collapse collapse" data-bs-parent="#accordionF">
                      <div class="accordion-body">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <div class="accordion-header">
                      <div class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-4">
                        <div class="form-check">
                          <input class="form-check-input" type="radio" name="check-radio" id="paypal" />
                          <label class="form-check-label" for="paypal">
                            Credit Card
                          </label>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div class="mb-3"><label class="mb-2" for="firstname">Name <span class="text-danger">*</span></label>
                          <input id="firstname" class="form-control" type="text" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div class="mb-3"><label class="mb-2" for="firstname">Expirt Date<span class="text-danger">*</span></label>
                          <input id="firstname" class="form-control" type="text" />
                        </div>
                      </div>
                      <div className="mb-4">
                        <div class="mb-3"><label class="mb-2" for="firstname">CVV<span class="text-danger">*</span></label>
                          <input id="firstname" class="form-control" type="text" />
                        </div>
                      </div>
                    </div>
                    <div id="flush-4" class="accordion-collapse collapse" data-bs-parent="#accordionF">
                      <div class="accordion-body">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                    </div>
                  </div>
                </div>
                <p class="mb-5">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="/privacy-policy" className="text-decoration-none text-yellow"><u>privacy policy</u></a>.</p>
                <div class="payment-checkbox">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckterm" />
                    <label class="form-check-label" for="flexCheckterm">
                      I have read and agree to the website <a href="/term" className="text-yellow text-decoration-none"><u>terms and conditions</u></a> *
                    </label>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <a class="w-100 btn theme-btn" href="/order-complete">PLACE ORDER</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Checkout;
