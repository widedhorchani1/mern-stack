import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import axios from "axios";
import { Card, Image, Button, Input, Form } from "semantic-ui-react";
import { FaAddressCard } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import ListPharmacies from "../components/ListPharmacies";
import PostForm from "../components/PostForm"
import Post from "../components/Post";

function Profile() {
  const [user, setUser] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);
  const [userId, setUserId] = useState("");
  const [updateUser, setUpdateUser] = useState({});

  let { id } = useParams();
  useEffect(() => {
    axios
      .get(`/api/myapp/${id}`)
      .then((res) => setUser(res.data.data))
      .catch((err) => console.dir(err));
  }, [user, id]);

  const handleShow = (user_id) => {
    setShowUpdate(!showUpdate);
    setUserId(user_id);
  };
  const handleChange = (e) => {
    setUpdateUser({ ...updateUser, [e.target.name]: e.target.value });
  };
  const handleSave = (user_id) => {
    axios
      .put(`/api/myapp/updateUser/${user_id}`, updateUser)
      .then((res) => {
        console.log(res);
        setShowUpdate(!showUpdate);
      })
      .catch((err) => console.dir(err));
  };

  return (
    <div>
      <NavBar />
      <div className="grid grid-cols-8 gap-1 grid-rows-1 min-h-[630px]  ">
        <div className=" col-span-2 bg-gray-100   ">
          <>
            <Card
              key={user._id}
              className="flex flex-col items-center justify-center absolute left-10 top-12 "
            >
              <Image src={user.userImg} />

              <Card.Content>
                {showUpdate && userId === user._id ? (
                  <Form
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  >
                    <Input
                      icon="user"
                      iconPosition="left"
                      defaultValue={user.userName}
                      type="text"
                      placeholder="UserName"
                      name="userName"
                    />
                    <Input
                      icon="address card"
                      iconPosition="left"
                      defaultValue={user.address}
                      type="text"
                      placeholder="Address"
                      name="address"
                    />
                    <Input
                      icon="phone"
                      iconPosition="left"
                      defaultValue={user.phone}
                      type="text"
                      placeholder="Phone"
                      name="phone"
                    />
                    <Input
                      icon="mail"
                      iconPosition="left"
                      defaultValue={user.email}
                      type="email"
                      name="email"
                    />
                    <Input
                      icon="image"
                      iconPosition="left"
                      defaultValue={user.userImg}
                      type="text"
                      placeholder="UserName"
                      name="userImg"
                    />
                  </Form>
                ) : (
                  <>
                    <Card.Header>{user.userName}</Card.Header>
                    <Card.Meta className="flex row-reverse items-center gap-[6px] ">
                      {" "}
                      <FaAddressCard />
                      {user.address}
                    </Card.Meta>
                    <Card.Meta className="flex row-reverse items-center gap-[6px] ">
                      {" "}
                      <AiFillPhone />
                      {user.phone}
                    </Card.Meta>
                    <Card.Meta className="flex row-reverse items-center gap-[6px] ">
                      {" "}
                      <AiOutlineMail />
                      {user.email}
                    </Card.Meta>
                  </>
                )}
              </Card.Content>

              <Card.Content extra>
                {showUpdate && userId === user._id ? (
                  <div className="ui two buttons   gap-1">
                    <Button
                      basic
                      color="teal"
                      onClick={() => handleSave(user._id)}
                    >
                      Save
                    </Button>
                    <Button
                      basic
                      color="red"
                      onClick={() => handleShow(user._id)}
                    >
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="ui two buttons   gap-1">
                    <Button
                      basic
                      color="green"
                      onClick={() => handleShow(user._id)}
                    >
                      Update
                    </Button>
                  </div>
                )}
              </Card.Content>
            </Card>
          </>
        </div>

 <Post/>
        <ListPharmacies />
      </div>
    </div>
  );
}

export default Profile;