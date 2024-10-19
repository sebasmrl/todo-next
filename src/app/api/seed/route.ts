import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) { 

    await prisma.todo.deleteMany(); //delete * from todo

    const todo = await prisma.todo.createMany({
        data: [
            { description: 'Piedra del alma'},
            { description: 'Piedra de la mente', complete:true},
            { description: 'Piedra del tiempo'},
            { description: 'Piedra del espacio'},
            { description: 'Piedra del realidad'},
        ]
    })
    console.log(todo);
  return NextResponse.json({ message: 'seed executed' });
}