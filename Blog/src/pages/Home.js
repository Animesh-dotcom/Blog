import React, { useRef, useState  } from 'react';
import JoditEditor from 'jodit-react';
import {
  Button, 
 Card,CardBody,Container,Form,Input, Label 
} from 'reactstrap';


const Home=()=>{
   
  const editor = useRef(null);
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  
  const [content,setContent]=useState("")
  const [err,setErr]=useState(false)


  const config={
    placeholder:"Start typing...."
  }
 const  handleSubmit=(e)=>{
  e.preventDefault();
    if(title.length===0||description.length===0||content.length===0)
    {
      setErr(true)
    }
    // setTitle("");
    // setDescription("")
    
  }
    return(
        <>
           <div className='wrapper'>
            <Card>
              
              <CardBody>
                <h3>My Blog page</h3>
                <Form onSubmit={handleSubmit}>
                  <div className='my-3'>
                    <Label for="title">Post title</Label>
                    <Input type='text' id='title' placeholder='Enter here' value={title} onChange={e=>setTitle(e.target.value)}/>
                    {err&&title.length<=0?<Label style={{color: "red",fontSize: "12px"}}>cant be empty</Label>:""}
                   
                  </div>
                  <div className='my-3'>
                    <Label for="description">Description</Label>
                    <Input type='text' id='description' placeholder='Enter here' value={description} onChange={e=>setDescription(e.target.value)} />
                    {err&&description.length<=0?<Label style={{color: "red",fontSize: "12px"}}>cant be empty</Label>:""}
                  </div>
                  <div className='my-3'>
                    <Label for="content">Content</Label>
                  
                    <JoditEditor 
                      ref={editor}
                      value={content}
                      config={config}
                    />
                    
                  </div>
                  <Container className='text-center'>
                    <Button color='primary'>Create Post</Button>
                   
                  </Container>
              
                </Form>
              </CardBody>
            </Card>

           </div>
        </>
    )
}

export default Home;