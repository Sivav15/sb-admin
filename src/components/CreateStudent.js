import React,{useState}  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';


function CreateStudent(props) {

let [name,setname]=useState("");
let [email,setemail]=useState("");
let [mobile,setmobile]=useState("");
let [batch,setbatch]=useState("");

let navigate = useNavigate();
function handleSubmit(){
  let data = {
    name:name,
    email:email,
    mobile:mobile,
    batch:batch
  }
  // let students = props.data.students;
  // students.push(data)
  // props.data.setStudents(students)

  let students = [...props.data.students];
  students.push(data)
  props.data.setStudents(students);

  //Just to jump to different route
    navigate('/dashboard');
}

  return <>
  
 <div className='m-5'>
 <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name"  onChange={(e)=>{
      setname(e.target.value);
      console.log(e.target.value);
      
      }}/>
  
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setemail(e.target.value)}}/>
  
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile number" onChange={(e)=>{setmobile(e.target.value)}} />
  
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Enter batch" onChange={(e)=>{setbatch(e.target.value)}} />
  
  </Form.Group>
  <Button variant="primary"  onClick={()=>{handleSubmit()}}>Submit </Button> 
 
</Form>
 </div>
  
  </>
}

export default CreateStudent