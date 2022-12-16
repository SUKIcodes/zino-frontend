import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { URL } from "../App";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const sendData = async (e) => {
    e.preventDefault();
    if (name === "") {
      return toast.error("Enter a task first");
    }
    try {
      await axios.post(`${URL}/api/tasks`, { name });
      setName("");
      toast.success("Task added");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section>
      <div>
        <form
          onSubmit={sendData}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <input
            style={{
              border: "none",
              outline: "none",
              padding: "20px",
              width: "100%",
              marginBottom: "20px",
              borderRadius: "20px",
            }}
            type="text"
            placeholder="Enter your task..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            style={{
              border: "none",
              outline: "none",
              padding: "20px",
              width: "100%",
              borderRadius: "20px",
            }}
            type="submit"
          >
            ADD
          </button>
        </form>
      </div>
    </section>
  );
};

export default Add;
