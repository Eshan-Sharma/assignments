import { useState } from "react"

export function CreateTodo(props){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text" placeholder="title" onChange={function (e){
            setTitle(e.target.value);
            console.log("title is:"+title)
        }}></input><br />
        <input type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}/><br />
        <button onClick={()=>{
            fetch("http://localhost:3030/todo",{
                method:"POST",
                body:JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "Content-type": "application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("Todo added")    
              })
        }}>Add a todo</button>
    </div>
}