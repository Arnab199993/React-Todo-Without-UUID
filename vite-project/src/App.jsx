import React from 'react'
import { useState } from 'react'
// import dateDifference from "./Date"
const Todo = (props) => {
  const [state, setState] = useState(false)
const colorchange=()=>{
  setState(!state)
}
  const dateDifference = (date) => {
    return moment().diff(date, 'days');
  };
  //  const [states, setStates] = useState([
  //   {
  //     date: '2022-01-01',
  //   },
  //   {
  //     date: '2022-09-01',
  //   },
  //   {
  //     date: '2022-12-01',
  //   },
  // ]);
  

  
   const defaultState={

    name:"",
    date:"",
    index:0,
    id:"",
    completed:false
   }


const checkboxeditdata = (index) => {
    let item = itemsarray[index];
    item.completed = true;
    itemsarray[index] = item;
    setItemsArray([...itemsarray]);
  };




  
  
   const  [count,setCount]=useState(0);
   const [editMode,setEditMode]=useState(false);

   const [task,setTask]=useState(defaultState)
   
    const [itemsarray,setItemsArray]=useState([]);

   const inputChange=(event)=>{


    setTask({...task,[event.target.name]:event.target.value});

   }

   const addToItemArray=()=>{
    itemsarray.push(task);
    setItemsArray([...itemsarray]);

    setTask(defaultState)

   }
   const removeItem=(index)=>{
   itemsarray.splice(index,1);  

   let newArr=[];  
   for (let i=0;i<itemsarray.length;i++){
    newArr.push(itemsarray[i]);
   }
    setItemsArray(newArr);

   }
   const populateEditData=(ele,i)=>{

    setTask({

      name:ele.name,
      date:ele.date,
      index:i,
      id:ele.id
     })
     setEditMode(true);
   }

   const editItem=()=>{

    console.log(task);
const filteredData=itemsarray.filter(ele=>ele.id!==task.id)

filteredData.push(task);
setItemsArray([...filteredData]);
setEditMode(false); 


   }


  return (
    <div className={"container"} style={{textAlign:"center"}}>

      


      
     
    


      
        <h1 style={{textAlign:"center"}}>My ToDo App</h1>
        <div className={"row"} style={{marginTop:"40px"}}>

            <div className={'col-md-6'}>
                <input type={"text"} className={"form-control"} value={task.name}  name={"name"} placeholder={"Task Name"} onChange={inputChange}/> <br></br>
                <input type={"date"} className={"form-control"}  value={task.date} name={"date"}  placeholder={"Task End Date"} onChange={inputChange}/> <br/>

               {
                 
                editMode?

<button className={"btn btn-primary"} onClick={editItem}>
Edit ToDo
</button> : <button  className={"btn btn-primary"} onClick={addToItemArray}>
Add ToDo
</button>
               }

            

           

            </div>


            <div className={'col-md-6'}>
            <ul className={"list-group"}>

                {
                    itemsarray.map((ele,i)=>(  
                    
                       <li  

                         style={ele.completed ? { textDecoration: "line-through" } : {}} key={i}
                                
                         
      className="list-group-item" aria-current="true"><strong>Activity - </strong>{ele.name}   <strong>Finish Date -</strong> {ele.date} 
                                  <input
                                    key={i} 
              type="checkbox"
              onChange={() => checkboxeditdata(i)}                         
            />
                         
                                      
                       <button className={"btn btn-danger"} style={{marginLeft:"20px"}} onClick={()=>removeItem(i)}>
                        Delete
                       </button>
             

                       <button className={"btn btn-danger"} style={{marginLeft:"20px"}} onClick={function (){

return populateEditData(ele,i);

}}>

              
                        Edit
                       </button>

                     
                       
                       </li>


                    ))
                }

</ul>

            </div>

        </div>
      <button
        onMouseOver={colorchange}
        style={{ backgroundColor: state ? "yellow" : "red" }}
      >
        Color Change
      </button>
      

<dateDifference/>
    </div>
  )
}

export default Todo