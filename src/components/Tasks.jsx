import axios from "axios";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { URL } from "../App";
import "../styles/tasks.scss";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    isLoading(true);
    try {
      const { data } = await axios.get(`${URL}/api/tasks`);
      setTasks(data);
      isLoading(false);
    } catch (error) {
      toast.error(error.message);
      isLoading(false);
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`${URL}/api/tasks/${id}`);
      getData();
      toast.success("Task deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <div className="container">
        {loading && <p>LOADING...</p>}
        {!loading && tasks.length === 0 ? (
          <p>No task found</p>
        ) : (
          <>
            {tasks.map((task, index) => {
              return (
                <div key={task._id}>
                  <b>{index + 1}</b>
                  <p>{task.name}</p>
                  <p>{task.completed}</p>

                  <button onClick={() => deleteTask(task._id)}>DELETE</button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Tasks;
