import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../public/images/logo.svg';
import { FaBasketShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { useMutation, useQuery } from '@tanstack/react-query';
import { CartProduct, userLogout } from '../Request/Endpoint';
import useToken from '../Hooks/useToken';
import Swal from 'sweetalert2';
import { useDispatch } from 'react-redux';
import { userInfo, userStatus } from '../Redux/Reducer';
import useStatus from '../Hooks/useStatus';
import { Status } from '../status/status';

function Header() {
    /************** Hooks */
    const token = useToken();
    const status = useStatus();
    const navigate = useNavigate()


    /************************ */
    const dispatch = useDispatch()
    const { data } = useQuery({
        queryKey: ["countcaart"],
        queryFn: () => CartProduct(token),
    })
    const CountCart = data?.data?.data
    console.log(data);


    /*********************** Logout */
    const Logout = useMutation({
        mutationKey: ["logout"],
        mutationFn: (token) => userLogout(token),
        onSuccess: (res) => {
            if (res?.data?.statuscode == 200) {

                Swal.fire({
                    title: `${res?.data?.message}`,
                    text: `${res?.data?.text}`,
                    icon: "success"
                })
                dispatch(userInfo({}))
                dispatch(userStatus(Status?.inactive))
                navigate("/")
            }
            else {
                Swal.fire({
                    title: `${res?.data?.message}`,
                    icon: "error"
                })
            }
        }
    })

    /***************** Confirm Logout */
    const Confirmlogout = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be Logout From this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Logout.mutate(token)
            }
        });
    }

    return (
        <header>
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="mx-auto my-2 my-lg-0 gap-5" navbarScroll>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/shop">Shop</Nav.Link>
                            <Nav.Link href="#">about us</Nav.Link>
                            <Nav.Link href="#">contact us</Nav.Link>
                            <Nav.Link href="#"> Blog </Nav.Link>
                        </Nav>
                        <div className="header-right d-flex align-items-center gap-4">
                            <div className="add-cart-icon position-relative">
                                <Link to='/cart'><FaBasketShopping /><span className="count">{status === Status?.inactive ? 0 : CountCart}</span></Link></div>
                            <div className='whislist-icon'>
                                <Link to='/'><FaHeart /></Link>
                            </div>
                            {/* ***********************  login/Logout button */}

                            {
                                status == Status?.inactive ?

                                    <div className="login-btn">
                                        <Link to='/login' className='nav-btn theme-btn text-capitalize'>login</Link>
                                    </div> :

                                    <div className="login-btn">
                                        <Link className='nav-btn theme-btn text-capitalize' onClick={() => Confirmlogout()}>logout</Link>
                                    </div>
                            }
                            {/* ********************************** End */}
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
}

export default Header;