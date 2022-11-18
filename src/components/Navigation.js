import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Modal, Input, Form } from "antd";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsPen } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import "antd/dist/antd.css";
import { onLogin, onRegister } from "../redux/features/navLogRegisSlicer";
import { dataGoogleLogin } from "../redux/features/googleOAuthSlicer";

function Navigation() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalRegisOpen, setIsModalRegisOpen] = useState(false);

  const [form] = Form.useForm();

  //modal login
  const showModalLogin = () => {
    setIsModalLoginOpen(true);
  };

  const handleOkLogin = () => {
    setIsModalLoginOpen(false);
  };

  const handleCancelLogin = () => {
    setIsModalLoginOpen(false);
  };

  //modal register
  const showModalRegis = () => {
    setIsModalRegisOpen(true);
  };

  const handleOkRegis = () => {
    setIsModalRegisOpen(false);
  };

  const handleCancelRegis = () => {
    setIsModalRegisOpen(false);
  };

  const handleChangeSearch = (e) => {
    e.preventDefault();
    setData(e.target.value);
  };

  const onSubmitSearch = () => {
    navigate(`/search/${data}`);
  };

  const onFinishLogin = async (values) => {
    dispatch(onLogin(values));
    setIsModalLoginOpen(false);
    form.resetFields();
  };

  const onFinishRegis = async (values) => {
    dispatch(onRegister(values));
    setIsModalRegisOpen(false);
    form.resetFields();
  };

  const isUserLogin = JSON.parse(localStorage.getItem("token"));
  const name = JSON.parse(localStorage.getItem("name"));
  const image = JSON.parse(localStorage.getItem("image"));

  const logOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <GoogleOAuthProvider clientId="162366539553-ffa0ea6d46gfhs3q7rsovvn1qu6tbi83.apps.googleusercontent.com">
      <div className="flex items-center justify-between absolute pt-10 px-20 z-10 w-full">
        <h1 className="text-slate-200 text-4xl font-bold cursor-pointer">
          <span className="font-extrabold">M</span>ovie
          <span className="text-slate-500">.sZ</span>
        </h1>
        <div className="flex justify-start w-full ml-12">
          <h5
            className="text-white text-lg cursor-pointer transition duration-500 hover:text-slate-400"
            onClick={() => navigate("/")}
          >
            Home
          </h5>
          <h5
            className="text-white text-lg cursor-pointer transition duration-500 hover:text-slate-400 ml-5"
            onClick={() => navigate("/all-movies")}
          >
            All Movies
          </h5>
        </div>
        <div className="flex items-center">
          <div className="bg-slate-600/25 rounded-md flex items-center px-2 w-[300px]">
            <input
              className="bg-transparent p-2 w-full focus:outline-none placeholder:text-white/50 text-white/50"
              type="text"
              placeholder="What do you want to watch?"
              onChange={(e) => handleChangeSearch(e)}
              onSubmit={(e) => onSubmitSearch(e)}
            />
            <AiOutlineSearch
              onClick={() => onSubmitSearch()}
              size={25}
              className="text-white/50 hover:text-white cursor-pointer transition-all duration-400"
            />
          </div>
          {/* <AiOutlineSearch
            // onClick={() => onSubmitSearch()}
            size={30}
            className="text-white hover:text-slate-200 cursor-pointer mr-3"
          /> */}
          <div className="flex items-center ml-8">
            {isUserLogin === null ? (
              <>
                <FaUserAlt
                  className="mr-1 cursor-pointer text-white transition-all duration-400 hover:text-slate-200 text-2xl"
                  onClick={showModalLogin}
                />
                <Modal
                  title="Log In To Your Account"
                  open={isModalLoginOpen}
                  onOk={handleOkLogin}
                  onCancel={handleCancelLogin}
                  footer={null}
                >
                  <Form
                    name="login"
                    className="login-form"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinishLogin}
                    form={form}
                  >
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        placeholder="Email Address"
                        suffix={<AiOutlineMail />}
                        style={{
                          borderRadius: "25px",
                          marginBottom: "0.3rem",
                          padding: "0.5rem 1rem",
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password
                        size="large"
                        placeholder="Password"
                        style={{
                          borderRadius: "25px",
                          margin: "0.3rem 0",
                          padding: "0.5rem 1rem",
                        }}
                      />
                    </Form.Item>
                    <Form.Item>
                      <div className="flex items-center justify-between">
                        <button
                          className="login-form-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                          type="submit"
                        >
                          Login
                        </button>
                        <div className="mt-4">
                          <GoogleLogin
                            onSuccess={(credentialResponse) => {
                              dispatch(dataGoogleLogin(credentialResponse));
                            }}
                            onError={() => {
                              console.log("Login Failed");
                            }}
                            shape="circle"
                          />
                        </div>
                      </div>
                    </Form.Item>
                  </Form>
                </Modal>
                {/* <button
                onClick={showModalRegis}
                className="flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-sm"
              >
                <BsPen className="mr-1" />
                Register
              </button>
              <Modal
                title="Create Account"
                open={isModalRegisOpen}
                onOk={handleOkRegis}
                onCancel={handleCancelRegis}
                footer={null}
              >
                <Form
                  className="regis-form"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinishRegis}
                >
                  <Form.Item
                    name="first_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="First Name"
                      suffix={<AiOutlineUser />}
                      style={{
                        borderRadius: "25px",
                        marginBottom: "0.3rem",
                        padding: "0.5rem 1rem",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="last_name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Last Name"
                      suffix={<AiOutlineUser />}
                      style={{
                        borderRadius: "25px",
                        margin: "0.3rem 0",
                        padding: "0.5rem 1rem",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      {
                        required: true,
                        message: "Please input your E-mail!",
                      },
                    ]}
                  >
                    <Input
                      size="large"
                      placeholder="Email Address"
                      suffix={<AiOutlineMail />}
                      style={{
                        borderRadius: "25px",
                        margin: "0.3rem 0",
                        padding: "0.5rem 1rem",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password"
                      style={{
                        borderRadius: "25px",
                        margin: "0.3rem 0",
                        padding: "0.5rem 1rem",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="confirm_password"
                    dependencies={["password"]}
                    rules={[
                      {
                        required: true,
                        message: "Please confirm your password again!",
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue("password") === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(
                            new Error(
                              "The two passwords that you entered do not match!"
                            )
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password
                      size="large"
                      placeholder="Password Confirmation"
                      style={{
                        borderRadius: "25px",
                        margin: "0.3rem 0",
                        padding: "0.5rem 1rem",
                      }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <button
                      type="submit"
                      className="regis-form-button bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                    >
                      Register
                    </button>
                  </Form.Item>
                </Form>
              </Modal> */}
              </>
            ) : (
              <>
                <div className="bg-transparent  w-full mr-3">
                  <div className="flex items-center py-1 px-3">
                    <img
                      className="w-6 h-6 rounded-full mx-auto"
                      src={
                        image === null
                          ? "https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-File.png"
                          : image
                      }
                      alt="avatar"
                    />
                    <h1 className="text-white pt-1 ml-3">{name}</h1>
                  </div>
                </div>
                <button
                  onClick={logOut}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Navigation;
