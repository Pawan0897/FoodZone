import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Logo from "../../public/images/logo.svg";
import { useFormik } from "formik";
import * as yup from "yup"
import { useMutation } from "@tanstack/react-query";
import { userSignup } from "../Request/Endpoint";
import Swal from "sweetalert2";
/**************************************** */
function SignUp() {
  const navigate = useNavigate()
  /************************* */
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required()

    }),
    onSubmit: (values) => UserRegister.mutate(values)
  })
  const UserRegister = useMutation({
    mutationKey: ["usersignin"],
    mutationFn: (values) => userSignup(values),
    onSuccess: (res) => {
      console.log(res?.data?.data, "............................");
      if (res?.data?.statuscode == 200) {
        formik.resetForm()
        Swal.fire({
          text: res?.data?.text,
          icon: "success",
          title: res?.data?.message
        })
        navigate("/login")
      }
      else if (res?.data?.statuscode == 400) {

        Swal.fire({
          icon: "info",
          title: res?.data?.message
        })
      }
      else {
        Swal.fire({
          icon: "error",
          title: res?.data?.message
        })
      }

    }
  })
  /************************************************** */
  return (
    <>
      <section className="auth-bg">
        <Container>
          <Row>
            <Col lg={5} className="mx-auto">
              <div className="auth-box">
                <div className="website-logo-inside logo-normal text-center">
                  <Link to="/">
                    <div className="logo">
                      <img className="logo-size" src={Logo} alt="" />
                    </div>
                  </Link>
                </div>
                <h3 className="font-md text-center fw-bold my-4">
                  Register new account
                </h3>
                <form>
                  {/* ****************** Name */}
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={formik?.values?.name}
                    onChange={formik?.handleChange}
                    placeholder="Name"
                    required=""
                  />
                  {formik?.errors?.name && (<p className="text-danger text-capitalize">{formik?.errors?.name}</p>)}
                  {/* ****************** Email */}
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    onChange={formik?.handleChange}
                    value={formik?.values?.email}
                    placeholder="E-mail Address"
                    required=""
                  />
                  {formik?.errors?.email && (<p className="text-danger text-capitalize">{formik?.errors?.email}</p>)}
                  {/* ****************** Password */}
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={formik?.values?.password}
                    onChange={formik?.handleChange}
                    placeholder="Password"
                    required=""
                  />
                  {formik?.errors?.password && (<p className="text-danger text-capitalize">{formik?.errors?.password}</p>)}
                  {/* ****************** Submit */}
                  <button
                    id="submit"
                    type="button"
                    onClick={() => formik?.handleSubmit()}
                    className="w-100 btn theme-btn mt-4"
                  >
                    sign up
                  </button>
                </form>
                <div className="page-links mt-4 text-center">
                  <Link to="/login" className="text-yellow fw-bold">
                    Login to account
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

export default SignUp;
