'use client';

import { FormEvent, MouseEvent, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import * as todosApi from "../helpers/todos";
import { useRouter } from "next/navigation";


export const NewTodo = () => { 

  const [description, setDescription] = useState('');
  const router = useRouter();

  const onSubmit = async(e:FormEvent)=>{
    e.preventDefault();
      console.log('form submited', description)
    if(description.trim().length == 0) return;
    todosApi.createTodo(description);
    router.refresh();
    setDescription('');
  }

  const onDelete = async(e:MouseEvent)=>{
    e.preventDefault();
   const value =  await todosApi.deleteCompletedTodos(); //bool
   router.refresh();
    return value;
  }


  return (
    <form  className='flex w-full pl-10 pb-5'
      onSubmit={ onSubmit }
    >
      <input type="text"
        value={description}
        onChange={ (value)=> setDescription(value.currentTarget.value)}
        className="w-6/12 -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all"
        placeholder="¿Qué necesita ser hecho?" />

      <button type='submit' className="flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all">
        Crear
      </button>
      
      <span className='flex flex-1'></span>

      <button 
        //TODO: onClick={ () => deleteCompleted() }
        type='button' 
        className="flex items-center justify-center rounded ml-2 bg-red-400 p-2 text-white hover:bg-red-700 transition-all"
        onClick={ onDelete }
      >
        <IoTrashOutline />
        Borrar Completados
      </button>


    </form>
  )
}