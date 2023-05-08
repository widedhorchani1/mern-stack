
import React, { useState } from 'react'
import {Form} from "semantic-ui-react"

 const PostForm = () => {
    const [title,setTitle]=useState
    const [content,setContent]=useState
    const [author,setAuthor]=useState
    //const handleSubmit=(e)=>{ }
  return (
    <div className="col-span-4 bg-gray-200 h-full flex flex-col items-center justify-center ">
    <Form>
        <Form.TextArea label='About' placeholder='Tell us more about you...' />
        <Form.Button >Submit</Form.Button>
    </Form>
  </div>

  )
}
export default PostForm