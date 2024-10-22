'use client';

import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem";

//import * as todosApi from '@/todos/helpers/todos';
//import { useRouter } from "next/navigation";
import { emptyServerAction, toggleTodo } from "../actions/todo-actions";
import { useRouter } from "next/navigation";



interface Props {
    todos?: Todo[];
}

export const TodosGrid = ({ todos = [] }: Props) => {

    //const router = useRouter();

    /* const toggleTodo = async(id:string, complete:boolean)=>{
        const updatedTodo = await  todosApi.updateTodo(id,complete);
        router.refresh(); // refrescar ruta actual donde haya cambiado
        return updatedTodo;
    } */
        const router = useRouter();

    return (
        <div className="bg-slate-300 grid grid-cols-1  sm:grid-cols-3 gap-2"
            onMouseEnter={()=>{ router.refresh()}}
        >
            {...todos.map((todo) => <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />)}
        </div>
    )
}
