import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos/components";

export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

export default async function RestTodosPage() {
   const todos = await prisma.todo.findMany({ orderBy:{ description:'asc'}});


  return (
    <div>
      {/* TODO: Formulario para crear nuevos TODOS */}
      <NewTodo />
      <TodosGrid todos={todos} />
    </div>
  );
}