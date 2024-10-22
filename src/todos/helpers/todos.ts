import { Todo } from "@prisma/client";

export const createTodo = async(description:string):Promise<Todo> =>{
    const body = { description};
    const todo =  await fetch(`/api/todos`, { 
        body: JSON.stringify(body), 
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=> res.json());
    console.log({todo})
    return todo;
}

export const updateTodo = async(id:string, complete:boolean):Promise<Todo> =>{

    //TODO: Actualizacion optimista
    //await sleep(2);

    const body = { complete};
    const todo =  await fetch(`/api/todos/${id}`, { 
        body: JSON.stringify(body), 
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res=> res.json());
    console.log({todo})

    return todo;
}

export const deleteCompletedTodos =  async():Promise<boolean>=>{
    await fetch('/api/todos',{
        method: 'DELETE',
        headers:{
            'Content-Type':'application/json'
        }
    })
    return true;
}




export const sleep = ( seconds:number = 0):Promise<boolean>=>{
    return new Promise<boolean>( (resolve)=>{
        setTimeout(() => {
            resolve(true);
        }, seconds*1000);
    })
}