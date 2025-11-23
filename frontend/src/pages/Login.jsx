import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../public/images/logo.svg";
import { useFormik } from "formik"
import * as yup from "yup"
import { useMutation } from "@tanstack/react-query";
import { UserSignin } from "../Request/Endpoint";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { AddToken, userInfo, userStatus } from "../Redux/Reducer";
import { Status } from "../status/status";
function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  /********************* formik $ yup */
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup.string().email().required(),
      password: yup.string().required()
    }),
    onSubmit: (values) => Loginuser.mutate(values)

  })
  /***************************** */
  const Loginuser = useMutation({
    mutationKey: ["userrlogin"],
    mutationFn: (values) => UserSignin(values),
    onSuccess: (res) => {
      if (res?.data?.statuscode == 200) {
        Swal.fire({
          text: res?.data?.text,
          icon: "success",
          title: res?.data?.message
        })
        console.log(res, ".......");
        navigate("/")
        dispatch(userInfo(res?.data?.data))
        dispatch(userStatus(Status?.active))

      }
      else if (res?.data?.statuscode == 400) {
        Swal.fire({
          text: res?.data?.text,
          icon: "error",
          title: res?.data?.message
        })
      }
    }
  })
  /************************* Element start */
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
                <h3 class="font-md text-center fw-bold my-4">Login to account</h3>
                <form>
                  {/* ***************************** Email */}
                  <input
                    class="form-control"
                    type="text"
                    name="email"
                    onChange={formik?.handleChange}
                    value={formik?.values?.email}
                    placeholder="E-mail Address"

                  />
                  {formik?.errors?.email && (<p className="text-danger text-capitalize">{formik?.errors?.email}</p>)}
                  {/* ***************************** Password */}
                  <input
                    class="form-control"
                    type="password"
                    name="password"
                    onChange={formik?.handleChange}
                    value={formik?.values?.password}
                    placeholder="Password"

                  />
                  {formik?.errors?.password && (<p className="text-danger text-capitalize">{formik?.errors?.password}</p>)}
                  <div class="form-button d-flex align-items-center justify-content-end">
                    <Link to="/forget-password" className="text-yellow">Forget password?</Link>
                  </div>
                  <button id="submit" type="button" onClick={() => formik?.handleSubmit()} class="w-100 btn theme-btn mt-4">
                    Login
                  </button>
                </form>
                <div class="page-links mt-4 text-center">
                  <Link to="/sign-in" className="text-yellow fw-bold">Register new account</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Login;
