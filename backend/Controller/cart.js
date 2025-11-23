const { CART } = require("../Modal/cart");

const AddToCart = async (req, res) => {
  try {
    const userid = req.userId;
    // const  image = req.file.path;/

    // console.log(image, "image.........................");

    const { ProductName, ProductPrice, ProductQuantity, image } = req.body;
    const existProduct = await CART.findOne({
      userid: userid,
      ProductName: ProductName,
    });
    if (existProduct) {
      return res.send({
        message: "Product is already Addedd!!!",
        statuscode: 400,
      });
    } else {
      const cartsave = new CART({
        ProductName: ProductName,
        ProductPrice: ProductPrice,
        ProductQuantity: ProductQuantity,
        image: image,
      });
      cartsave.userid = userid;
      await cartsave.save();
      return res.send({
        statuscode: 200,
        message: " Addedd Successfully !!!",
        text: "Your Product in Cart Successfullt!!!",
        data: cartsave,
      });
    }
  } catch (error) {
    return res.send({
      message: `server error ${error}`,
      statuscode: 500,
    });
  }
};

/********************* Remove Cart */
const RemoveCart = async (req, res) => {
  try {
    const { ProductName } = req.body;

    const userId = req.userId;
    const del = await CART.deleteOne({
      ProductName: ProductName,
      userid: userId,
    });
    if (del) {
      return res.send({
        statuscode: 200,
        message: "Cart Removed Successfully !!",
        text: "Your cart Removed Successfully !!!",
      });
    } else {
      return res.send({
        statuscode: 400,
        message: "something erro  !!",
      });
    }
  } catch (error) {
    return res.send({
      statuscode: 500,
      message: "server eoor  !!",
    });
  }
};

/*********************** Get Cart */

const GetCart = async (req, res) => {
  const userid = req.userId;
  console.log(userid, "///////////////////////////");
  const data = await CART.find({ userid: userid });
  if (data) {
    return res.send({
      statuscode: 200,
      message: "Cart Products !!",
      data: data.length,
      cartproduct: data,
    });
  } else {
    return res.send({
      statuscode: 400,
      message: "No Cart Products !!",
      data: 0,
    });
  }
};
module.exports = { AddToCart, RemoveCart, GetCart };
