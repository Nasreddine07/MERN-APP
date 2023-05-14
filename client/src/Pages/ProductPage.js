import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { AddProduct, DeleteProduct, getAllDataProducts } from "../Redux/ProductSlice";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import UpdateModal from "../Components/UpdateModal";
import { Link } from "react-router-dom";

const ProductPage = () => {
  const user = useSelector((state) => state.User.user);
  const [newProduct, setNewProduct] = useState({});
  const [image, setImage] = useState("");
  const HandleChangeProduct = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const HandleChangeImage = (e) => {
    setImage(e.target.files[0]);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const products = useSelector((state) => state.Product.Products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllDataProducts());
  }, []);

  const AddingProduct = (e) => {
    e.preventDefault();
    const formDataProduct = new FormData();
    formDataProduct.append("title", newProduct.title);
    formDataProduct.append("Des", newProduct.Des);
    formDataProduct.append("Image", image);
    dispatch(AddProduct(formDataProduct));
    handleClose();
  };


  return (
    <div>
      {/* Add Post */}

      {user?.Role == "admin" && (
        <>
          <Button variant="primary" onClick={handleShow}>Add a Product</Button>
         
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add a Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Control
                onChange={HandleChangeProduct}
                name="title"
                type="text"
                placeholder="Enter title"
              />
              <Form.Control
                onChange={HandleChangeProduct}
                name="Des"
                type="text"
                placeholder="Enter Description"
              />
              <input
                onChange={HandleChangeImage}
                name="Image"
                type="file"
                accept="image/*"
              />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={AddingProduct}>
                Add Product
              </Button>
            </Modal.Footer>
          </Modal>
        </>
    )}

      {/* getAll Products */}

      <Row xs={1} md={2} className="g-4">
        {products?.map((Product,i) => (
          <Col key={i}>
            <Card>
              <Card.Img
                style={{ width: "50%" }}
                variant="top"
                src={Product.Image.imgUrl}
              />
              <Card.Body>
                <Card.Title>{Product.title}</Card.Title>
                <Card.Text>{Product.Des}</Card.Text>  
              </Card.Body>
              </Card>
            <Button as={Link} to={Product._id} relative="path"  variant="success" color="inherit">Show Item</Button>
            {user?.Role == "admin" && (
              <>
              <UpdateModal Product={Product}/>
              <Button onClick={()=> dispatch(DeleteProduct(Product._id))} variant='danger'>Delete</Button>
              </>
              )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
