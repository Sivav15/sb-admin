import React,{useState}  from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {useNavigate,useParams} from 'react-router-dom';


function EditStudent(props) {
  let params = useParams();

let [name,setname]=useState(props.data.students[params.id].name);
let [email,setemail]=useState(props.data.students[params.id].email);
let [mobile,setmobile]=useState(props.data.students[params.id].mobile);
let [batch,setbatch]=useState(props.data.students[params.id].batch);

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

  let students = [...props.data.students]

  students.splice(params.id,1,data)

  props.data.setStudents(students)

  //Just to jump to different route
    navigate('/dashboard');
}

  return <>
  
 <div className='m-5'>
 <Form>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name"  value={name}  onChange={(e)=>{
      setname(e.target.value);
      
      
      }}/>
  
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  value={email}  onChange={(e)=>{setemail(e.target.value)}}/>
  
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Enter mobile number"  value={mobile}  onChange={(e)=>{setmobile(e.target.value)}} />
  
  </Form.Group>


  <Form.Group className="mb-3">
    <Form.Label>Batch</Form.Label>
    <Form.Control type="text" placeholder="Enter batch"  value={batch}  onChange={(e)=>{setbatch(e.target.value)}} />
  
  </Form.Group>
  <Button variant="primary"  onClick={()=>{handleSubmit()}}>Submit </Button> 
 
</Form>
 </div>
  
  </>
}

export default EditStudent;