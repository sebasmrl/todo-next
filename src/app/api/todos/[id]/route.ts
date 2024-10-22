/* eslint-disable @typescript-eslint/no-unused-vars */
import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup';



interface Params {
    params: { id: string }
}

export async function GET(request: NextRequest, { params }: Params) {
    let todo;
    try {
        todo = await getOneTodo(params.id);
    } catch (error) {
        return NextResponse.json({ message: `No se ha encontrado ningun todo con id:${params.id}` });
    }
    return NextResponse.json(todo);
}




const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional()
});

export async function PUT(request: NextRequest, { params }: Params) {
    let todo;
    try {
        todo = await getOneTodo(params.id);
    } catch (error) {
        return NextResponse.json({ message: `No se ha encontrado ningun todo con id:${params.id}` });
    }

    const {complete, description, ...rest} = await putSchema.validate( await request.json());
    const updatedTodo = await prisma.todo.update({
        where: { id:params.id},
        data: {complete, description }
    });

    return NextResponse.json(updatedTodo);
}








//generics handlers
const getOneTodo = async( id:string ):Promise<Todo | undefined> =>{
    const  todo = await prisma.todo.findFirstOrThrow({ where: { id: id } });
    return todo;
}