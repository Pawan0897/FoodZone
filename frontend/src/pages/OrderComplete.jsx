import React from "react";
import Header from "../component/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Footer from "../component/Footer";

function OrderComplete() {
  return (
    <>
      <Header />
      <section className="breadcrum">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="display-5 fw-bold text-capitalize text-center">
                Confirm Order
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
                <li className="text-capitalize fw-bold">Confirm Order</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="confirm-sec pb-0">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <h5>Delivery address</h5>
              <ul class="list-inline">
                <li>7003 fairway street</li>
                <li>New york</li>
                <li>NY 10033</li>
                <li>USA</li>
                <li>Mobile No :+11-123456789</li>
              </ul>
            </Col>
            <Col lg={6}>
              <h5>Payment summary</h5>
              <p class="text-muted">Transaction No : 66282856617</p>
              <div class="row">
                <div class="col-8">
                  <p class="m-0">Price</p>
                  <p class="m-0">Shipping charge</p>
                  <p class="m-0">Order Total</p>
                </div>
                <div class="col-4">
                  <p class="fw-bold m-0">$876.00</p>
                  <p class="fw-bold m-0">$100.00</p>
                  <p class="fw-bold m-0">$100.00</p>
                </div>
              </div>
            </Col>
          </Row>
          <div class="checkout-accordion accordion" id="accordion">
            <div class="accordion-item">
              <p class="accordion-header">
                <button class="accordion-button" type="button">
                  Order No: 1724
                </button>
              </p>
              <div class="accordion-collapse">
                <div class="accordion-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Order date</th>
                        <th scope="col">Order total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-muted">23th jan 2021 3:04 pm</td>
                        <td class="text-muted">$1199.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <p class="accordion-header">
                <button class="accordion-button" type="button">
                  <span class="me-1">
                    <img
                      src="https://d33wubrfki0l68.cloudfront.net/da6d467b080874b2346c71a0671cec802b96ab2e/f7c64/assets/images/checked.svg"
                      alt="title"
                    />
                  </span>
                  Thank you for order
                </button>
              </p>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default OrderComplete;
