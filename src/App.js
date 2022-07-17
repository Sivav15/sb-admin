
import './App.css';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import EditStudent from './components/EditStudent';



function App() {
  let data = {
    monthly:"Rs. 40,000",
    annual:"Rs. 4,80,000",
    task:70,
    pending:18
  }

  let [students,setStudents] =useState([
    {
      name:"Raj",
      email:"raj@gmail.com",
      mobile:"9659587526",
      batch:"B36WDT",
    },
    {
      name:"Balaji",
      email:"balaji@gmail.com",
      mobile:"9653387526",
      batch:"B35WE",
    },
    {
      name:"Gokul",
      email:"gokul@gmail.com",
      mobile:"12345587526",
      batch:"B36WE",
    }
  ])
  return (
    
    <div className='d-flex'>
      
      
      <BrowserRouter>
      <Sidebar/>
      
          <Routes>
              
              <Route path='dashboard' element={<Dashboard data={{data,students,setStudents}}/>}/>
              <Route path='create-student' element={<CreateStudent data={{data,students,setStudents}}/>}/>
              <Route path='edit-student/:id' element={<EditStudent data={{data,students,setStudents}}/>}/>
              <Route path='*' element={<Dashboard data={{data,students,setStudents}}/>}/>
              
          </Routes>
      </BrowserRouter>
      
        
        
        </div>
        
        
        

    
    
  );
}

export default App;
