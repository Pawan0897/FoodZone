import React, { useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "./page.css";
import { Link, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import useStatus from "../Hooks/useStatus";
import useToken from "../Hooks/useToken";
import { Status } from "../status/status";
import Swal from "sweetalert2";
import { useMutation } from "@tanstack/react-query";
import { addtoCart } from "../Request/Endpoint";

function Shop() {
  /**************** Token status */
  const status = useStatus();
  const token = useToken();
  const navigate = useNavigate()
  /********************* Product Image */
  const Product_Image = {
    img1: "https://avatars.mds.yandex.net/i?id=bc803dad31cf63b8ffb3026775b7e3bc_l-8473939-images-thumbs&ref=rim&n=13&w=1000&h=1000",
    img2: "https://avatars.mds.yandex.net/get-altay/4303820/2a0000017998b87fb890e92862a111b8f959/XXL",
    img3: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg",
    img4: "https://shashlichni-dvor-bg.ru/wp-content/uploads/2021/06/new-pizza10.jpg",
    img5: "https://avatars.mds.yandex.net/get-altay/4001569/2a0000017528137dd86f20e16ea93c6fde40/XXL",
    img6: "https://p2.zoon.ru/2/a/5a3b9ba8a24fd9579a455094_62698899752a39.48357311.jpg",
    img7: "https://avatars.mds.yandex.net/i?id=391f64b17ec45f82e91a66dd4455ca41_l-5247972-images-thumbs&ref=rim&n=13&w=1000&h=1000",
    img8: "https://avatars.mds.yandex.net/get-altay/6237886/2a00000180dd803b1b19bf2ec401879e3928/XXL_height",
  }

  /****************** AllProducts  */
  const [product, setproduct] = useState([
    { id: 1, ProductName: "Sauce Pizza", ProductPrice: 10, image: Product_Image?.img1, ProductQuantity: 1 },
    { id: 2, ProductName: "Mushroom pizza", ProductPrice: 12, image: Product_Image.img2, ProductQuantity: 1 },
    { id: 3, ProductName: "Olive Pizza", ProductPrice: 33, image: Product_Image.img3, ProductQuantity: 1 },
    { id: 4, ProductName: "Chicken Pizza", ProductPrice: 30, image: Product_Image.img4, ProductQuantity: 1 },
    { id: 5, ProductName: "Roman Pizza", ProductPrice: 10, image: Product_Image.img5, ProductQuantity: 1 },
    { id: 6, ProductName: "pizza Capricciosa", ProductPrice: 12, image: Product_Image.img6, ProductQuantity: 1 },
    { id: 7, ProductName: "Pizza Margherita", ProductPrice: 33, image: Product_Image.img7, ProductQuantity: 1 },
    { id: 8, ProductName: "Peppy Paneer  Pizza", ProductPrice: 30, image: Product_Image.img8, ProductQuantity: 1 },

  ])
  /***************************  UPdate Quantity */
  const UpdateQuantity = (id, type) => {
    const updateproduct = product.map(item => {
      if (item.id === id) {
        const newqty = type == "increase" ? item.ProductQuantity + 1 : item.ProductQuantity - 1;
        return { ...item, ProductQuantity: newqty < 1 ? 1 : newqty }
      }
      return item;
    })
    return setproduct(updateproduct)
  }

  /************************** Query add to cart */
  const Addtocart = useMutation({
    mutationKey: ["addtocart"],
    mutationFn: ({ item, token }) => addtoCart(item, token),
    onSuccess: (res) => {
      if (res?.data?.statuscode == 200) {
        Swal.fire({
          title: `${res?.data?.message}`,
          text: `${res?.data?.text}`,
          icon: "success"
        })
        navigate("/cart")
      }
      else if (res?.data?.statuscode == 400) {
        Swal.fire({
          title: `${res?.data?.message}`,
          text: "This Product is already added",
          icon: "info"
        })
      }
    }
  })
  return (
    <>
      <Header />
      <section className="breadcrum">
        <Container>
          <Row>
            <Col lg={12}>
              <h2 className="display-5 fw-bold text-capitalize text-center">
                shop
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
                <li className="text-capitalize fw-bold">shop</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="shop-sec pb-0">
        <Container>
          <Row>
            {
              product?.map((item) => {
                return (
                  <>
                    <Col lg={3} md={4}>
                      <div class="product-box mb-4">
                        <div class="product-image">
                          <img
                            src={item?.image}
                            alt="title"
                          />
                        </div>
                        <div class="product-content">
                          <h4 class="mb-2">
                            <Link to="/single-product" className="text-black">
                              {item?.ProductName}
                            </Link>
                          </h4>

                          <h5 class="product-price text-yellow mb-3">${item?.ProductPrice * item?.ProductQuantity}.00</h5>
                          <div class="product-bottom">
                            {/* ******************* Update button quantity */}
                            {/* ******** Quantity andleer */}
                            <div class="product-count mb-3">
                              <span class="minus" onClick={() => UpdateQuantity(item?.id, "decrease")}>-</span>
                              <input type="text" value={item?.ProductQuantity} onChange={(e) => e.target.value} />
                              <span class="plus" onClick={() => UpdateQuantity(item.id, "increase")}>+</span>
                            </div>
                            {/* ********End  Quantity andleer */}
                            {/* ******************* add to cart buttton  */}
                            <button class="btn theme-btn" to="/cart" onClick={() => {
                              if (status == Status?.active) {
                                Addtocart.mutate({ item, token })
                              }
                              else {
                                Swal.fire({
                                  text: "You are not logined please login!!",
                                  title: "Login First !!",
                                  icon: "info"
                                })
                                navigate("/login")
                              }
                            }}>
                              Add to cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </>
                )
              })
            }

          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
}

export default Shop;
