
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import "./new.css";
import { edituser } from './JS/userslice/userSlice';

import Swal from "sweetalert2";
function Edituser({ping,setping}) {
    const dispatch=useDispatch();
    const user = useSelector((state) => state.user.user);
    const [edit, setedit] = useState({
        name:user?.name,
        lastName:user?.lastName,
        email:user?.email,
       password:user?.password,
       img:user?.img
    })
  return (
    <div  style={{position:'absolute', width:"32rem", }}>


    <div className="container2">
           
            <details>
              <summary>
                <div className="but" id='tropico'>
                Edit  
                </div>
                <div className="details-modal-overlay" />
              </summary>
              <div className="details-modal" style={{    left: "252%"}}>
                <div className="details-modal-close">
                  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
                    
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.7071 1.70711C14.0976 1.31658 14.0976 0.683417 13.7071 0.292893C13.3166 -0.0976311 12.6834 -0.0976311 12.2929 0.292893L7 5.58579L1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L5.58579 7L0.292893 12.2929C-0.0976311 12.6834 -0.0976311 13.3166 0.292893 13.7071C0.683417 14.0976 1.31658 14.0976 1.70711 13.7071L7 8.41421L12.2929 13.7071C12.6834 14.0976 13.3166 14.0976 13.7071 13.7071C14.0976 13.3166 14.0976 12.6834 13.7071 12.2929L8.41421 7L13.7071 1.70711Z" fill="black" />
                 
                  </svg>
                </div>
                <div className="details-modal-title" style={{background: "#f5e6ce"}}>
                  <h1>Edit your profile</h1>
                </div>
                <div className="details-modal-content">
                <p className="descbox">
                <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User name</Form.Label>
        <Form.Control type="text" placeholder={user?.name} onChange={(e)=>setedit({...edit,name:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>LastName</Form.Label>
        <Form.Control type="text" placeholder={user?.lastName}  onChange={(e)=>setedit({...edit,LastName:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Email</Form.Label>
        <Form.Control type="text" placeholder={user?.email}  onChange={(e)=>setedit({...edit,email:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> Password</Form.Label>
        <Form.Control type="text" placeholder={user?.password}  onChange={(e)=>setedit({...edit,password:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User img</Form.Label>
        <Form.Control type="text" placeholder={user?.img}  onChange={(e)=>setedit({...edit,img:e.target.value})} />
        
      </Form.Group>
      </Form>
      <button id="cani"
    
              onClick={() => {
                dispatch(edituser({id : user._id, edit}));setping(!ping);

                Swal.fire("profil updated");
              }}
            >
              Update Profile
            </button>
            </p>
                </div>
              </div>
            </details>
          </div>
    
    </div>
  )
}

export default Edituser