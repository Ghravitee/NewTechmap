// import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { useEffect, useState } from "react";
import Input from "../common/Input";
import { API_KEY } from "./CoursesForm";
import axios from "axios";

function VideosForm() {
  const [courses, setCourses] = useState([]);
  const [values, setValues] = useState({
    title: "",
    vid: "",
    courseID: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`${API_KEY}/admin/all_course`);

        setCourses(data);
      } catch (error) {
        console.log(error.response.data);
      }
    })();
  }, []);

  const fieldChanged = (event) =>
    setValues({ ...values, [event.target.name]: event.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { title, vid, courseID } = values;
      if (title !== "" || vid !== "" || courseID !== "") {
        const {
          data: { message },
        } = await axios.post(`${API_KEY}/admin/videos`, values);

        alert(message);
      } else {
        alert("field is empty");
      }
    } catch (error) {
      console.log(error.response.data.message);
      alert(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <h5 className="mb-3 dark:text-white">Add Video Course</h5>
      <div>
        <Input
          type="text"
          placeholder="Enter Video title/name"
          name="title"
          value={values.title}
          onChange={fieldChanged}
          className="w-full p-3 border-2 rounded-md"
        />
      </div>
      <div>
        <Input
          type="text"
          placeholder="enter video id"
          name="vid"
          value={values.vid}
          className="w-full p-3 border-2 my-3 rounded-md"
          onChange={fieldChanged}
        />
      </div>
      <div>
        <select
          name="courseID"
          id=""
          onChange={fieldChanged}
          value={values.courseID}
          className="w-full p-3 border-2  rounded-md"
        >
          <option value="">Select</option>
          {courses.map(({ id, title }) => (
            <option value={id} key={id}>
              {title}
            </option>
          ))}
        </select>
      </div>

      <button
        className="bg-black text-white w-full mt-3 p-3 rounded-lg"
        type="submit"
      >
        Add Course Video
      </button>
    </form>
  );
}

export default VideosForm;
