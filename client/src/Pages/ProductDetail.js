import { useSelector, useDispatch } from 'react-redux';
import { getProductById } from "../Redux/ProductSlice";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { addItemToCart } from '../Redux/CartSlice';
import './styles.css';

const ProductDetail = () => {
 const products = useSelector((state) => state.Product.Products);
 const { id } = useParams();
 const dispatch = useDispatch();

 useEffect(() => {
   dispatch(getProductById(id));
 }, [dispatch, id]);

 return (
   <div>
     <div className="product-detail">
       {products.map((product) => (
         <div className="product-card" key={product.id}>
           <div className="product-card-image">
             <img src={product.Image.imgUrl} alt={product.title} />
           </div>
           <div className="product-card-details">
             <h2>{product.title}</h2>
             <p>{product.Des}</p>
             <p className="product-card-price">Price: ${product.price}</p>
             <Button onClick={() => dispatch(addItemToCart(product))} variant='success'>Add to Cart</Button>
             <Nav.Link as={Link} to="/Cart">View Cart</Nav.Link>
           </div>
         </div>
       ))}
     </div>
   </div>
 );
};



export default ProductDetail;