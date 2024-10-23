'use server';

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
 


export const sleep = ( seconds:number = 0):Promise<void>=>{
    return new Promise<void>( (resolve)=>{
        setTimeout(() => {
            resolve();
        }, seconds*1000);
    })
}



export const toggleTodo = async (id:string, complete:boolean):Promise<Todo>=>{
     //await sleep(4);
    const todo = await prisma.todo.findFirst({ where:{ id}});
    if( !todo ) throw `Todo con id:${id} no encontrado`;
    
    const updatedTodo = await prisma.todo.update({ data:{complete }, where:{ id}});
    revalidatePath('/dashboard/server-todos');
    revalidatePath('/dashboard/rest-todos');
    return updatedTodo;
} 


export const  emptyServerAction = async():Promise<void>=>{ return;}



export async function addTodo(description:string) { 
    try {
        const todo =  await prisma.todo.create({ data:{ description} });
        revalidatePath('/dashboard/server-todos');
        revalidatePath('/dashboard/rest-todos');
        return todo;
    } catch (e) {
        throw `Error: No se pudo crear el TODO, ${e}`;
    }
}


export async function deleteCompletedTodos():Promise<void> { 
    try {
        await prisma.todo.deleteMany({ where:{ complete:true}});
        revalidatePath('/dashboard/server-todos');
        revalidatePath('/dashboard/rest-todos');
        return;
    } catch (e) {
        throw `Error: No se eliminaron todos completados, ${e}`;
    }
}



