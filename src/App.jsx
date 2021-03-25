import React , {useState} from 'react';
import TodoList from './TodoList'


const App = ()=>{

    const [inputList, setInputList]=useState("");
    const [Items,setItems]=useState([]);

    const itemEvent = (event) => {
            setInputList(event.target.value)
    };

    const listOfItems= () =>{
        
        if(inputList!=="")
        {
                setItems((oldItems) => {
                        return [...oldItems,{text:inputList, completed:false, id:Math.random()*1000}]
                        });
        }
        setInputList('');
        console.log(typeof(setItems))
    }

    const deleteItem= (id) =>{
        console.log('deleted')
        setItems((oldItems)=>{
            return oldItems.filter((arrEle,index)=>{
                return index!==id;
            });
        });
    }
    const arr=[]

    return(
        <>
            <div className='container'>
            <div className='wrapper'>
            <br />
            <h1>ToDo List</h1>
            <br />
            <input className='addItems' type='text' placeholder='Add Items'  value={inputList} onChange={itemEvent} />
            <button className='addButton' onClick={listOfItems}>+</button>
            <div className='wrapper1'>
            
            <ol>
                {Items.map((itemval,index)=>{
                    return <TodoList
                                    key={itemval.id}
                                    id={index}
                                    id1={itemval.id}
                                    Items={Items}
                                    setItems={setItems}
                                    todo={itemval}
                                    onSelect={deleteItem}
                                    />
                })}
            </ol>
            </div>

            </div>

            </div>
        </>
    );
}


export default App;