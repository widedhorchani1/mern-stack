import React from 'react'
import { Form } from 'semantic-ui-react';
function Post() {
  const handleSubmit=(e)=>{ 
    
  }
  return (
    <div className="col-span-4 bg-gray-200 h-full flex flex-col items-center justify-center ">
        <Form>
        <Form.TextArea label='' placeholder='' />
        <Form.Button onSubmit={() => handleSubmit()}>Post</Form.Button>
    </Form>
    </div>
  );
}

export default Post