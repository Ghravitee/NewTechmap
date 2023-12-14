import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import React from 'react';

function CourseForm() {


  return (
    
    <form className="flex max-w-md flex-col gap-4" id='courseForm'>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="title" value="Course Title" />
        </div>
        <TextInput type="text" placeholder="" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="image" value="Image link" />
        </div>
        <TextInput type="text" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="stack" value="Stack" />
        </div>
        <TextInput type="text" required shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Description" />
        </div>
        <Textarea placeholder="Description of the course..." required rows={4} shadow />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="Course Topic" value="Course Topic" />
        </div>
        <TextInput type="text" placeholder="" required shadow />
      </div>
     
      <Button type="submit">Submit Info</Button>
    </form>
  );
}

export default CourseForm;
