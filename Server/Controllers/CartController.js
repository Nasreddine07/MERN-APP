const Cart = require('../Models/CartModel');
const Product = require('../Models/ProductModel');

const addItemToCart = async (req, res) => {
try {
// Create a new cart item
const newCartItem = await Product.findById(req.params.id);


// Save the cart item to the database
const Cart = new CartItem({
product: newCartItem
});
await Cart.save();

res.status(201).json({ CartItem, msg: 'Product has been added successfully!' });
} catch (error) {
res.status(501).json({ message: error });
}
};


const removeItemFromCart = async (req, res) => {
try {

const { ProductId } = req.params;
await Cart.findByIdAndRemove(ProductId);
const CartItems = await Cart.find().populate('product');
res.status(200).json({ CartItems });
} catch (error) {
res.status(501).json({ message: error });
}
};

module.exports = { removeItemFromCart, addItemToCart };