import React, { useEffect, useState } from "react";
import "../styles/PatientAdress.css";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Patientaddress = (props) => {

  // console.log(typeof(props));
  const receivedProps = props;
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onsubmit = (values) => {
    const allData = Object.assign(values, props.data)
    console.log("All data:", allData);
    props.step2Data(allData) //will send the data to parent comp i.e. sign up for my self
  }

  
  // document.addEventListener('keydown', (event) => {
  //   if (event.keyCode === 13) {
  //     event.preventDefault();
  //     console.log('Enter key pressed');
  //     handleSubmit(onsubmit)();
  //   }
  // });


  return (
    <form class="PatientAddress-container" onSubmit={handleSubmit((onsubmit))}>

      <h1>youro</h1>
      <p className="h3">If in-persons visits are best for you we will seamlessly<br /> transition your care to one of our urology patners in<br />your area</p>
      <div className="Form-address-Container">
        <div className="address-fields">
          <div className="label-address">
            {/* <label>Address</label> */}
            <input placeholder="Address *" className="input-field input-border" type="text" {...register("address", {
              required: true,
              maxLength: 50,
            })} />
            {errors?.address?.type === "required" && <p className="error-text">This field is required</p>}
            {errors?.address?.type === "maxLength" && <p className="error-text">Address cannot exceed 40 characters</p>}
          </div>

          <div className="label-address">
            <input placeholder="City *" className="input-field input-border" type="text" {...register("city", {
              required: true,
              maxLength: 32,
            })} />
            {errors?.city?.type === "required" && <p className="error-text">This field is required</p>}
            {errors?.city?.type === "maxLength" && <p className="error-text">Last Name cannot exceed 32 characters</p>}
          </div>

          <div className="label-address">
            <input placeholder="State *" className="input-field input-border" type="text" {...register("state", {
              required: true,
              maxLength: 32,
            })} />
            {errors?.state?.type === "required" && <p className="error-text">This field is required</p>}
            {errors?.state?.type === "maxLength" && <p className="error-text">Email cannot exceed 32 characters</p>}
          </div>

          <div className="label-address">
            <input placeholder="zipcode *" className="input-field input-border" type="text" {...register("zipCode", {
              required: true,
              maxLength: 32,
            })} />
            {errors?.zipCode?.type === "required" && <p className="error-text">This field is required</p>}
            {errors?.zipCode?.type === "maxLength" && <p className="error-text">Zip code cannot exceed 5 characters</p>}
          </div>

          <p></p>
          <div className="label-address">
            <label>Date of Birth</label>
            <input placeholder="YYYY-MM-DD" className="input-field input-border" type="date" {...register("dateOfBirth", {
              required: true,
              maxLength: 32,
            })} />
            {errors?.dateOfBirth?.type === "required" && <p className="error-text">This field is required</p>}
            {errors?.dateOfBirth?.type === "maxLength" && <p className="error-text">Email cannot exceed 32 characters</p>}

          </div>

          <p></p>
          <div className="address-fields">
            <div className="label-address">
              <label>Legal Sex</label>
              <p>For billing purpose ,which sex does your insurance record has?</p>
              <div>
                <input {...register("gender", { required: true })} type="radio" value="MALE" />male
              </div>
              <div>
                <input {...register("gender", { required: true })} type="radio" value="FEMALE" />female
              </div>
              {errors?.gender?.type === "required" && <p className="error-text">This field is required</p>}
            </div>
          </div>




          {/* <div className="bottom-fields">
                   <p>Already youro member? <span>Login</span></p>      
		</div>
                
		 <div className="button-container">
                   <button className="next-button">Next</button>
                </div> */}
        </div>

      </div>
      <div style={{ width: "50%", margin: "0px auto 10px auto", paddingTop: "0px" }}>
        <div className="required-fields" style={{ justifyContent: 'flex-between' }}>
          <div className="myself-label" style={{ width: "48%", marginTop: '0px' }}>
            <p>Already youro member? <span onClick={() => navigate('/login')} className="color-secondary" style={{ cursor: 'pointer' }}><u>Login</u></span> </p>
          </div>
          <div className="myself-label" style={{ width: "45%", position: "relative" }}>
            <button className="next-button btn-filled" onClick={handleSubmit((onsubmit))}>Next</button>

          </div>
        </div>
      </div>
    </form>
  )
}

export default Patientaddress;

