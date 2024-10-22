export const dynamic = 'force-dynamic';      // 'auto' | 'force-dynamic' | 'error' | 'force-static'
export const revalidate = 0;                 // false | 0 | number 



import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos/components";

export const metadata = {
    title: 'Listado de Todos - Server Actions',
    description: 'Listado de Todos',
};



export default async function ServerTodosPage() {
    const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });
    console.log('Server construido')

    return (
        <div>   
            <span className="block text-3xl mb-5">Server Actions </span>
            <NewTodo />  
            <TodosGrid todos={todos} />
        </div>
    );
}