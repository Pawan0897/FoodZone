import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useMutation } from '@tanstack/react-query';
import { addtoCart } from '../Request/Endpoint';
import Swal from 'sweetalert2';
import useToken from '../Hooks/useToken';
import useStatus from '../Hooks/useStatus';
import useDetail from '../Hooks/useDetail';
import { Status } from '../status/status';
function ProductSection() {
    const navigate = useNavigate()
    const token = useToken();
    const status = useStatus();

    const detail = useDetail();
    console.log(detail, status);

    /********************* Product Image */
    const Product_Image = {
        img1: "https://avatars.mds.yandex.net/i?id=bc803dad31cf63b8ffb3026775b7e3bc_l-8473939-images-thumbs&ref=rim&n=13&w=1000&h=1000",
        img2: "https://avatars.mds.yandex.net/get-altay/4303820/2a0000017998b87fb890e92862a111b8f959/XXL",
        img3: "https://main-cdn.sbermegamarket.ru/big2/hlr-system/-16/020/542/871/216/222/9/100045560750b0.jpg",
        img4: "https://shashlichni-dvor-bg.ru/wp-content/uploads/2021/06/new-pizza10.jpg",
        img5: "https://avatars.mds.yandex.net/get-altay/4001569/2a0000017528137dd86f20e16ea93c6fde40/XXL"
    }
    /***************************** Product */
    // const product = [
    //     { id: 1, name: "Sauce Pizza", price: "$10.00", img: Product_Image.img1, },
    //     { id: 2, name: "Mushroom pizza", price: "$12.00", img: Product_Image.img2, },
    //     { id: 3, name: " Olive Pizza", price: "$33.00", img: Product_Image.img3, },
    //     { id: 4, name: " Chicken Pizza", price: "$30.00", img: Product_Image.img4, },
    //     { id: 5, name: "Sauce Pizza", price: "$10.00", img: Product_Image.img5, },
    // ]

    /******************************************* */
    const [product, setproduct] = useState([
        { id: 1, ProductName: "Sauce Pizza", ProductPrice: 10, image: Product_Image.img1, ProductQuantity: 1 },
        { id: 2, ProductName: "Mushroom pizza", ProductPrice: 12, image: Product_Image.img2, ProductQuantity: 1 },
        { id: 3, ProductName: " Olive Pizza", ProductPrice: 33, image: Product_Image.img3, ProductQuantity: 1 },
        { id: 4, ProductName: " Chicken Pizza", ProductPrice: 30, image: Product_Image.img4, ProductQuantity: 1 },
        { id: 5, ProductName: "Roman Pizza", ProductPrice: 10, image: Product_Image.img5, ProductQuantity: 1 },
    ])
    /******************************* */
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
    /****************************************** Add to cart*/
    const AddToCart = useMutation({
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
    // ******************* Login not then call it function 

    return (
        <>

            <section className="shop-area ">
                <Container>
                    <Row className="mb-4 pb-5">
                        <Col lg={12}>
                            <div className="sec-title text-center mb-4 pb-5">
                                <h2 className="display-5 fw-bold position-relative">
                                    Weekly Pizza Offer
                                </h2>
                            </div>
                            {/* Product ********************* */}
                            <div className="order-box">
                                <Swiper
                                    navigation={true}
                                    loop={true}
                                    modules={[Navigation]}
                                    slidesPerView={1}
                                    spaceBetween={10}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 2,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 50,
                                        },
                                    }}
                                    className="mySwiper"
                                >
                                    {/* ************************************ Map Od Products */}
                                    {
                                        product.map((item) => {
                                            return (
                                                <>
                                                    <SwiperSlide key={item?.id}>
                                                        <div class="product-box" key={item?.id}>
                                                            <div class="product-image">
                                                                <img
                                                                    type="file"
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
                                                                    {/* ******** Quantity andleer */}
                                                                    <div class="product-count mb-3">
                                                                        <span class="minus" onClick={() => UpdateQuantity(item?.id, "decrease")}>-</span>
                                                                        <input type="text" value={item?.ProductQuantity} onChange={(e) => e.target.value} />
                                                                        <span class="plus" onClick={() => UpdateQuantity(item.id, "increase")}>+</span>
                                                                    </div>
                                                                    {/* ********End  Quantity andleer */}
                                                                    {/* *********** Add to cart */}
                                                                    <button type='button' class="btn theme-btn" onClick={() => {
                                                                        if (status === Status?.active) {
                                                                            AddToCart.mutate({ item, token })
                                                                        } else {
                                                                            Swal.fire({
                                                                                title: "Login First !!",
                                                                                text: "You are not login !!!",
                                                                                icon: "info"
                                                                            }).then(() => navigate("/login"))

                                                                        }
                                                                    }

                                                                    }>
                                                                        Add to cart
                                                                    </button>
                                                                    {/* *************  */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </SwiperSlide>
                                                </>
                                            )
                                        })
                                    }
                                </Swiper>
                            </div>
                            {/* ************************* */}
                        </Col>
                    </Row>

                </Container>
            </section>

        </>
    )
}

export default ProductSection
