import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItems, deleteItems, removeAll } from '../actions';

const TodoList = () => {
    const [inputData,setInputData] = useState('')
    const handleChange = (e) => {
        const {name,value} = e.target
        if(name === 'search'){
            setInputData(value)
        }
    }
    const dispatch = useDispatch()
    const listData = useSelector((state)=>state.addReducers.list)
    return (
        <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
            <h2 className='text-warning text-center'>Welcome My Redux Todo List Project</h2>

            <div className="search-bar py-4">
      <div className="container">
      <div className="form-inline d-flex justify-content-center">
    <input className="searchInput" 
    type="search"
    name="search"
    value={inputData}
    onChange={handleChange}
     placeholder="ADD Items" 
   />
    <button className="btn searchBtn" onClick={()=>dispatch(addItems(inputData,setInputData('')))}>Add</button>
  </div>
      </div>
        </div>
        {/* show data */}


   <div className="row mt-4 ">
   {
    listData.map((elem)=>{
        return (
       <div key={elem.id} className="col-md-4 pt-3">
       <div className="card ">
            <div  className="card-body">
            <h5 className="card-title">{elem.data}</h5>
           <button className="btn btn-primary" onClick={()=>dispatch(deleteItems(elem.id))} >Delete</button>
          </div>

</div>
       </div>
               )
            })
        }
   </div>
<div className="mt-2 d-flex justify-content-center">
<button className="btn btn-primary removeAll " 
onClick={()=>dispatch(removeAll())}
>
  <span>Check List</span>
</button>
</div>

   
        </div>
    );
};

export default TodoList;