import React, { useEffect, useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToken from "../Hooks/useToken";
import { CartProduct, RemoveCart } from "../Request/Endpoint";
import Swal from "sweetalert2";

function Cart() {
  const token = useToken([])
  const Queryclient = useQueryClient()
  /*************************** */
  const { data } = useQuery({
    queryKey: ["cartproduct"],
    queryFn: () => CartProduct(token)
  })
  const product = data?.data?.cartproduct;

  /********************* */
  const [qyantity, setquantity] = useState([])
  // ************************ Store Api into the state var
  useEffect(() => {
    if (product) {
      setquantity(product)
    }
  }, [data?.data])
  /**************************************** Update Quantity  */
  const updateQuantity = (id, type) => {
    let update = qyantity?.map((item) => {
      let qty = item?.ProductQuantity
      if (item?._id == id) {
        if (type == "inc") qty += 1;

        if (type == "dec" && qty > 1) qty -= 1
        return { ...item, ProductQuantity: qty }
      }
      return item;
    })
    setquantity(update)
  }
  console.log(qyantity, ".............................");
  /*********************** Total */
  const subprice = qyantity.map((item) => item?.ProductPrice * item?.ProductQuantity)
  const total = subprice.reduce((prev, curr) => prev + curr, 0)
  console.log(total);
  /************************** Remove Cart Profduct  */
  const cartRemove = useMutation({
    mutationKey: ["removecart"],
    mutationFn: ({ body, token }) => RemoveCart(body, token),
    onSuccess: (res) => {
      Queryclient.invalidateQueries({ queryKey: ["cartproduct"] })
      if (res?.data?.statuscode == 200) {
        Swal.fire({
          title: `${res?.data?.message}`,
          text: `${res?.data?.text}`,
          icon: "success"
        })
      }
      else {
        Swal.fire({
          title: `${res?.data?.message}`,
          icon: "error"
        })
      }

    }
  })
  /************************* Start components */
  return (
    <>
      <Header />
      <section className="breadcrum">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="display-5 fw-bold text-capitalize text-center">
                Shopping Cart
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
                <li className="text-capitalize fw-bold">Shopping Cart</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="cart-sec pb-0">
        <Container>
          <Row>
            <Col lg={8} md={7}>
              {/* ********************* condition if cart empty */}
              {
                data?.data?.data == 0 ? <h2 className="text-center mt-5 pt-5">No Cart Products</h2> :
                  /************************** Else it show */
                  <div class="pe-md-4">
                    <div class="table-responsive">


                      <table class="cart-table table mb-3">
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Price</th>
                            <th class="text-center" scope="col">
                              Quantity
                            </th>
                            <th class="text-center" scope="col">
                              Subtotal
                            </th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        {/* ****************************** Fetched Products */}
                        <tbody>
                          {
                            qyantity?.map((item) => {
                              return (
                                <>
                                  <tr>
                                    <td scope="row">
                                      <div class="cart-product">
                                        <span class="cart-image">
                                          <img
                                            src={item?.image}
                                            alt="title"
                                          />
                                        </span>{" "}
                                        <p class="cart-content  m-0">{item?.ProductName}</p>
                                      </div>
                                    </td>
                                    <td>${item?.ProductPrice}.00</td>
                                    <td>
                                      {" "}
                                      {/* ********************* Quantity Update */}
                                      <div class="product-count">
                                        <span type="button" class="minus" onClick={() => updateQuantity(item?._id, "dec")}>-</span>
                                        <input type="text" value={item?.ProductQuantity} onChange={(e) => e.target.value} />
                                        <span class="plus" onClick={() => updateQuantity(item?._id, "inc")}>+</span>
                                      </div>
                                    </td>

                                    {/* ********************* Quantity Update */}
                                    <td class="text-center">${item?.ProductPrice * item?.ProductQuantity}.00</td>
                                    {/* ******************* Remove button */}

                                    <td class="text-end">
                                      <span type="button" class="cart-cancel" onClick={() => {
                                        let body = {
                                          ProductName: item?.ProductName
                                        }

                                        cartRemove.mutate({ body, token: token })
                                      }}>
                                        <img
                                          src="https://d33wubrfki0l68.cloudfront.net/661780cadbe41ca37b464a95cd02e9fca8c167ab/81d51/assets/images/cart-cancel.svg"
                                          alt="title"
                                        />
                                      </span>
                                    </td>
                                    {/* ****************** End remove button */}
                                  </tr>
                                </>
                              )
                            })
                          }
                        </tbody>
                        {/* **************************** End Rpodyct frtched  */}
                      </table>
                    </div>
                    <div class="cart-table-bottom mt-4 text-end">
                      <button class="btn theme-btn">UPDATE CART</button>
                    </div>
                  </div>
              }
            </Col>
            <Col lg={4} md={5}>
              <div class="cart-total-box mt-4 mt-md-0 mb-4 mb-md-7">
                <h5 class="mb-4">Cart Totals</h5>
                <div class="cart-total-item">
                  <span class="pe-2">Subtotal</span>
                  <span class="ps-2">${total}.00</span>
                </div>
                <div class="cart-total-item">
                  <span class="pe-2">Shipping</span>
                  <div class="cart-total-content ps-2">
                    <p class="mb-1">
                      Enter your address to view shipping options
                    </p>
                    <span class="text-yellow d-block">calculate shipping</span>
                  </div>
                </div>
                <div class="cart-total-item">
                  <span class="fw-bold pe-2">Total</span>
                  <span class="fw-bold ps-2">${total}.00</span>
                </div>
              </div>

              <div className="mt-4">
                <Link class="w-100 btn theme-btn" to="/checkout">
                  PROCEED TO CHECKOUT
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
