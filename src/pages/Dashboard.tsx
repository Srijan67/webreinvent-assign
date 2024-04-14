import React, { useEffect, useState } from "react";
import { userDetailAction } from "../utils/action";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, removeUser, userState } from "../features/userSlicer";
import { useNavigate } from "react-router-dom";

const Dasbhoard = () => {
  const [userDetail, setUserDetail] = useState<any>();
  const userData: userState = useSelector(getUserData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [err, setErr] = useState<string>("");
  const handleLogout = () => {
    dispatch(removeUser());
    navigate("/");
  };
  const getUser = async (id: number) => {
    let response = await userDetailAction(id);
    console.log(response?.data, userData);
    if (response?.status === 200) {
      setUserDetail(response?.data.data);
    } else {
      setErr("Something Went Wrong");
    }
  };
  useEffect(() => {
    if (userData?.id && userData?.token) {
      getUser(userData?.id);
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [userData]);
  if (err !== "") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-sm mx-auto bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
          <p className="font-bold">Error</p>
          <p>{err}</p>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-6 m-4 w-full lg:w-3/4 xl:w-1/2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {userDetail ? (
              <>
                <img
                  className="h-16 w-16 rounded-full"
                  src={userDetail.avatar}
                  alt="User Avatar"
                />
                <div>
                  <div className="text-2xl font-semibold text-gray-800">
                    {userDetail.first_name} {userDetail.last_name}
                  </div>
                  <p className="text-gray-400">{userDetail.email}</p>
                </div>
              </>
            ) : (
              <p className="text-gray-500">Loading...</p>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dasbhoard;
