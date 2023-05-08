import React, { useState } from "react";
import { Button, Form, Message } from "semantic-ui-react";
import {useNavigate, Link} from "react-router-dom";
import axios from "axios";

function Register() {
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleRegister = () => {
    setLoading(true);
    axios
      .post("/api/myapp/register", newUser)
      .then((res) => {
        navigate("/Profile");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(err.response.data.error);
        console.dir(err);
      });
  };
  return (
    <div className='grid grid-cols-3  rounded-lg gap-2 h-screen p-[3px]'>
    <div className=' p-[2rem] flex justify-center items-center'><center><img src="https://media.istockphoto.com/id/801762106/vector/pharmacy-icon.jpg?s=612x612&w=0&k=20&c=ED6GNMkLvo468lQGy9k0JIbvNhluF3iAfgAm9ThEEtk=" alt="" />
    <h1 className='text-[3rem] font-bold'>PharmaClic</h1></center></div>

      <div className='border-2 border-bleu rounded-lg col-span-2 '>
        <Form className="part2"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <div className="RN">
            <h5 className="inline"> You already have an account ?</h5>{" "}
            <Link to="/login"> Login now </Link>
          
            <Form.Group unstackable widths={2}>
            <Form.Input
              label="Username"
              placeholder="Username"
              name="userName"
              error={errorMsg.includes("username") && errorMsg}
            />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Input
              label="Email"
              type="email"
              placeholder="ex:example@ex.com"
              name="email"
              error={errorMsg.includes("e-mail") && errorMsg}
            />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Input
              label="Password"
              type="password"
              placeholder="password"
              name="password"
              error={errorMsg.includes("password") && errorMsg}
            />
            </Form.Group>
     
            <Form.Group unstackable widths={2}>
            <Form.Input
              label="Phone"
              placeholder="Phone"
              name="phone"
              error={errorMsg.includes("phone") && errorMsg}
            />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Input
              label="Address"
              placeholder="address"
              name="address"
              error={errorMsg.includes("address") && errorMsg}
            />
            </Form.Group>
            <Form.Group unstackable widths={2}>
            <Form.Input
              label="Profile Picture"
              type="text"
              placeholder="Profile Picture"
              name="userImg"
            />
            </Form.Group>

            <Button color='green'
            content="Save"
            onClick={() => {
              handleRegister();
            }}
            
            loading={loading}
            />
           </div>
            </Form>
        
        {errorMsg.includes("E-mail") && (
          <Message error header="Ouups!🤕" content={errorMsg} />
        )}
      </div>
    </div>
  );
}

export default Register;