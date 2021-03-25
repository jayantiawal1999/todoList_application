import React, { useState } from 'react';

const TodoList = ({key,id,id1,Items, setItems, todo,onSelect})=>{
        const [line, setLine]=useState();
        //let line=false;
        const arra=[]
        
        
        const check=()=>{
            // props.setItems((props.items).map((item)=>{
            //     if(props.id===item.id){
            //         return {...item, completed:!item.completed};
            //     }
            //     return item;
            // }))
            
            
            
            setItems(Items.map((item)=>{
                console.log(item)
                if(id1===item.id){
                    return {...item,completed:!item.completed}
                }
                return item
            }))
        }
    
    return (<>    
                <div className='container1'>
                    <input  className='newItem' type='checkbox' onClick={check}/>
                    <li  className={`text ${todo.completed ? 'completed': 'none' }`}>{todo.text}</li>
                    <button className='deleteButton' 
                            onClick={()=>{
                                onSelect(id);
                            }}><i className="far fa-trash-alt" /></button>
                </div>
            </>);
}

export default TodoList;
// className={`text ${props.items.completed ? 'completed': 'none' }`}