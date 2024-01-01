// import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React, {useEffect, useState} from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../config";
import axios from "axios";
import Input from '../common/Input';

const Stacks = [
  { id: 1, name: "Frontend" },
  { id: 2, name: "Backend" },
  { id: 3, name: "Mobile App" },
  { id: 4, name: "Full Stack" },
  { id: 5, name: "DevOps" },
  { id: 6, name: "Database" },
  { id: 7, name: "AI and Data Scientist" },
  { id: 8, name: "UX Design" },
  { id: 9, name: "Technical Writer" },
  { id: 10, name: "Blockchain" },
  { id: 11, name: "Cyber Security" },
];

const topic = [
  { id: 1, name: "Basic" },
  { id: 2, name: "Language" },
  { id: 3, name: "Framework" },
];
export const API_KEY = "http://api.techmap.cc/techmap";


function CourseForm() {

  
  

  const [file, setFile] = useState(null);
  const [per, setPer] = useState(null);
  const [values, setValues] = useState({
    title: "",
    image: "",
    stack: "",
    desc: "",
    topic: "",
  });

  useEffect(() => {
    const uploadImage = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          // console.log('Upload is ' + progress + '% done');
          setPer(progress);
          switch (snapshot.state) {
            case "paused":
              // console.log('Upload is paused');
              break;
            case "running":
              // console.log('Upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log('File available at', downloadURL);
            setValues((prev) => ({ ...prev, image: downloadURL }));
          });
        }
      );
    };
    file && uploadImage();
  }, [file]);

  const fieldChanged = (event) =>
    setValues({ ...values, [event.target.name]: event.target.value });

  const submitHandler = async (e) => {
    e.preventDefault();

    const { title, image, stack, desc, topic } = values;

    if (
      title !== "" ||
      image !== "" ||
      stack !== "" ||
      desc !== "" ||
      topic !== ""
    ) {
      try {
        const {
          data: { message },
        } = await axios.post(`${API_KEY}/admin/course`, values);
        alert(message);
      } catch (e) {
        console.log(e.response.data.message);
        alert(e.response.data.message);
      }
    } else {
      alert("Fields are empty");
    }
  };


  return (
    
    <form onSubmit={submitHandler}>
        <div>
          <Input
            type="text"
            name="title"
            placeholder="enter the course title/name"
            value={values.title}
            onChange={fieldChanged}
            className="w-full p-3 border-2 rounded-md"
          />
        </div>

        <div className="my-2 ">
          <input
            type="file"
            className="w-full p-3 border-2 rounded-md dark:text-white"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <div>
          <select
            name="stack"
            onChange={fieldChanged}
            value={values.stack}
            id=""
            className="w-full p-3 border-2 rounded-md"
          >
            <option value="">Select Stack</option>
            {Stacks.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <select
            name="topic"
            onChange={fieldChanged}
            value={values.topic}
            id=""
            className="w-full p-3 my-2 border-2 rounded-md"
          >
            <option value="">Select Topic</option>
            {topic.map(({ id, name }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <textarea
            name="desc"
            onChange={fieldChanged}
            value={values.desc}
            className="w-full p-3 border-2 h-32 rounded-md"
            placeholder="Enter course description"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div>
          <button
            className=" border-white text-white w-full mt-3 p-3 rounded-lg"
            type="submit"
          >
            Add Course
          </button>
        </div>
      </form>
  );
}

export default CourseForm;
