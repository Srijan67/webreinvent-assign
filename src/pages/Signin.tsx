import React, { useState, FormEvent } from "react";
import { registerAction } from "../utils/action";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveUser } from "../features/userSlicer";
import { FormDetail } from "./Signup";
import TextInput from "../components/TextInput";
import ButtonSubmit from "../components/ButtonSubmit";
const Signup = () => {
  const [formDetail, setFormDetail] = useState<FormDetail>({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [err, setErr] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(formDetail);
    let response: any = await registerAction(formDetail);
    if (response && response.status === 200) {
      dispatch(saveUser(response?.data));
      navigate("/dashboard");
    } else if (response?.status === 400) {
      setErr(response?.data?.error);
    } else {
      setErr("Something Went Wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-96">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
        {err && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {err}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Email"
            value={formDetail.email}
            setFormDetail={setFormDetail}
            placeholder="Enter Email"
            type="email"
            key={"email"}
          />
          <TextInput
            label="Password"
            value={formDetail.password}
            setFormDetail={setFormDetail}
            placeholder="Enter Password"
            type="password"
            key={"password"}
          />
          <ButtonSubmit label="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
