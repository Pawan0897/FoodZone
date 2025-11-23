import { Link } from "react-router-dom";
import "./header.css";
import Logo from "../../public/images/logo.svg";
function Footer() {
  return (
    <>
      <footer class="footer-area pb-0">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <Link class="footer-logo mb-md-2" to="/">
                <img src={Logo} alt="logo" />
              </Link>
              <p className="mt-4 w-75">
                One with to of and behave. That onto and she desires a concept
                of through with when reached will so you The wanted wow
                statement pile a windshield we a often for to tried met.
              </p>
            </div>
            <div class="col-lg-5">
              <div class="row">
                <div class="col-6 col-md-6">
                  <div class="footer-widget mt-3 mt-lg-0">
                    <h5 class="mb-2">Quick links</h5>
                    <ul class="footer-list list-inline m-0">
                      <li>
                        <a href="/shop">Pizza</a>
                      </li>
                      <li>
                        <a href="/shop">Burger</a>
                      </li>
                      <li>
                        <a href="/shop">Cake</a>
                      </li>
                      <li>
                        <a href="/shop">Chocolate</a>
                      </li>
                      <li>
                        <a href="/shop">Ice Cream</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-6 col-md-6">
                  <div class="footer-widget mt-3 mt-lg-0">
                    <h5 class="mb-2">Oppning Hours</h5>
                    <ul class="footer-list list-inline m-0">
                      <li>Sat : 8AM - 5PM</li>
                      <li class="me-0">Sun - Thu : 12PM - 8PM</li>
                      <li>
                        Friday: <span class="text-danger">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-3 mt-lg-10  align-items-center">
            <div class="col-md-5 order-md-1">
              <ul class="footer-list text-md-end list-inline m-0">
                <li class="list-inline-item me-1 me-lg-4">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li class="list-inline-item">
                  <a href="/term">Terms of service</a>
                </li>
              </ul>
            </div>
            <div class="col-md-7 order-md-12">
              <p class="copyright-text mt-1 mt-md-0 mb-0">
                © <span id="spanYear">2025</span> -Petuk. All Rights Reserved by{" "}
                <Link href="https://themeix.com/" target="_blank">
                  themeix
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
