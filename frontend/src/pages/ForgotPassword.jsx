import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../public/images/logo.svg";
function ForgotPassword() {
  return (
    <>
      <section className="auth-bg">
        <Container>
          <Row>
            <Col lg={5} className="mx-auto">
              <div className="auth-box">
                <div class="website-logo-inside logo-normal text-center">
                  <Link to="/">
                    <div class="logo">
                      <img class="logo-size" src={Logo} alt="" />
                    </div>
                  </Link>
                </div>
                <h3 class="font-md text-center fw-bold my-4">
                  Forget Password
                </h3>
                <form>
                  <input
                    class="form-control"
                    type="text"
                    name="username"
                    placeholder="E-mail Address"
                    required=""
                  />
                  <button
                    id="submit"
                    type="submit"
                    class="w-100 btn theme-btn mt-4"
                  >
                    Login
                  </button>
                </form>
                <div class="page-links mt-4 text-center">
                  <Link to="/login" className="text-yellow fw-bold">
                    Back To Login
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default ForgotPassword;
