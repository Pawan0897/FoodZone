import { https } from "./https";

/************************* Registration API */
export const userSignup = async (body) => {
  return await https.post("/users/signup", body);
};
/************************** Login API */
export const UserSignin = async (body) => {
  return await https.post("/users/login", body);
};
/***************************** Add to cart */
export const addtoCart = async (body, token) => {
  console.log("token", token, "And Item +>", body);
  return await https.post("/cart/addtocart", body, {
    headers: {
      Authorization: token,
    },
  });
};
/********************************** Get cart */
export const CartProduct = async (token) => {
  return await https.post(
    "/cart/cartproduct",
    {},
    {
      headers: {
        Authorization: token,
      },
    }
  );
};
/********************************* Logout */
export const userLogout = async (token) => {
  return await https.post(
    "/users/logout",
    {},
    { headers: { Authorization: token } }
  );
};

/***********************************  Remove CAr Product */
export const RemoveCart = async (body, token) => {
  return await https.post("/cart/removecart", body, {
    headers: { Authorization: token },
  });
};
