import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { UpdateDataProduct } from '../Redux/ProductSlice';




const UpdateModal = ({Product}) => {
  
    const [UpdatedProduct, setUpdatedProduct] = useState({_id: Product._id})
    const HandleChangeProduct = (e)=>{
        setUpdatedProduct({...UpdatedProduct, [e.target.name] : e.target.value})
    }

    const [image, setImage] = useState("");
    const HandleChangeImage = (e) => {
      setImage(e.target.files[0]);
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch()

    const Updating = ()=>{

      dispatch(UpdateDataProduct(UpdatedProduct));
        handleClose()
    }
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>Update</Button>
         
         <Modal show={show} onHide={handleClose}>
           <Modal.Header closeButton>
             <Modal.Title>Update Product</Modal.Title>
           </Modal.Header>
           <Modal.Body>
             <Form.Control
               onChange={HandleChangeProduct}
               name="title"
               type="text"
               placeholder="Enter title"
               defaultValue={Product?.title}
             />
             <Form.Control
               onChange={HandleChangeProduct}
               name="Des"
               type="text"
               placeholder="Enter Description"
               defaultValue={Product?.Des}
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
             <Button variant="success" onClick={Updating}>Update</Button>
           </Modal.Footer>
         </Modal>
    </div>
  )
}

export default UpdateModal
    
