import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    getAuthData();
  }, []);

  const getAuthData = async () => {
    if (!token) {
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        mode: "cors",
      });
      const result = await response.json();
      setUser(result.user);
    } catch (error) {
      toast.error("An error occurred", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  const msg = localStorage.getItem("message");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="bg-white absolute right-0 top-24 border rounded-xl w-64 h-44 mx-5">
      <div className="flex items-center  gap-[1rem] m-2 ">
        <div className="flex items-center flex-col gap-[1rem] cursor-pointer">
          <div>
            <div className="flex flex-col gap-2">
              <h3>{user.name}</h3>
            </div>
            <p className="font-normal text-sm text-[#074FB2]">@{user.email}</p>
          </div>
          <div>
          {msg === "Logged in as admin" && (
            <div className="space-x-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="text-black text-sm cursor-pointer"
              >
                All Product
              </button>
              <button
              onClick={() => navigate("/allorders")}
              className="text-black text-sm cursor-pointer"
            >
              all orders
            </button>
              <button
                onClick={() => navigate("/addproduct")}
                className="text-black text-sm cursor-pointer"
              >
                Add
              </button>
            </div>
          )}</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
