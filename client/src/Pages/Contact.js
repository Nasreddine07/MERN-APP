import React from "react";
import { Formik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import './styles.css';

const Contact = () => (
  <>
  <img
         className="d-block w-100"
         src="https://res.cloudinary.com/dtwpmuiav/image/upload/v1682463947/Screenshot_2023-04-26_at_00-02-50_Contact_-_Atac_All_-_Hot_Melt_Adhesive_Water-Based_Adhesive_Flexography_Ink_pgdl8e.png"
         alt="Contact"
         height='550px'
       />
    <div className="contact mt-5 text-center">
      <h2 className="mb-4">Contact</h2>
      <Formik initialValues={{ firstName: "", lastName: "", email: "" }}>
        <Form>
        <div className="mb-4">
          <Field
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First Name"
          />
          </div>
          <div className="mb-4">
          <Field
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last Name"
          />
          </div>
          <div className="mb-4">
          <Field name="email" type="email" id="email" placeholder="Email" />
          </div>
          <div className="mb-4">
          <TextareaAutosize
            maxRows={5}
            aria-label="maximum height"
            placeholder="Message"
            style={{
              width: 301,
              height: 80,
              fontSize: "1.2rem",
              fontFamily: "sans-serif",
              paddingLeft: "0.6rem",
              borderRadius: "0.3rem"
            }}
          />
          </div>
          <Link to="/contact">
            <button className="btn btn-dark btn-lg">Submit</button>
          </Link>
        </Form>
      </Formik>
    </div>
  </>
);

export default Contact;
