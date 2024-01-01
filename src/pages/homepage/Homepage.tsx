import { Tabs } from "flowbite-react";
import React from "react";
import { BiSolidVideos } from "react-icons/bi";
import { GrResources } from "react-icons/gr";
import { HiUserCircle } from "react-icons/hi";
import CourseForm from "../../components/forms/CoursesForm.jsx";
import ResourcesForm from "../../components/forms/ResourcesForm.jsx";
import VideosForm from "../../components/forms/VideosForm.jsx";

function Homepage() {
  return (
    <Tabs aria-label="Default tabs">
      <Tabs.Item active title="Course" icon={HiUserCircle} className="text-red-500">
        <CourseForm />
      </Tabs.Item>
      <Tabs.Item title="Resources" icon={GrResources}>
       <ResourcesForm />
      </Tabs.Item>
      <Tabs.Item title="Videos" icon={BiSolidVideos}>
        <VideosForm />
      </Tabs.Item>
      
    </Tabs>
  );
}


export default Homepage;