import { Button, Label, TextInput } from "flowbite-react";
import React from "react";

function ResourcesForm() {
  return (
    <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Resources Title" />
        </div>
        <TextInput type="text" placeholder="" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Link" value="Link" />
        </div>
        <TextInput type="text" required shadow />
      </div>

      <label
        htmlFor="countries"
        className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
      >
        Course ID
      </label>
      <select
        id="courses"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option defaultValue={''}>Choose a Course</option>
        <option value="">HTML</option>
        <option value="">CSS</option>
        <option value="">JAVASCRIPT</option>
        <option value="">GIIT</option>
        <option value="">TAILWIND</option>
        <option value="">REACT</option>
        <option value="">VUE</option>
        <option value="">ANGULAR</option>
        <option value="">TYPESCRIPT</option>
        <option value="">NODE JS</option>
        <option value="">C++</option>
        <option value="">PYTHON</option>
        <option value="">C</option>
        <option value="">C SHARP</option>
        <option value="">JAVA</option>
        <option value="">GOLANG</option>

      </select>

      <Button type="submit">Submit Info</Button>
    </form>
  );
}

export default ResourcesForm;
