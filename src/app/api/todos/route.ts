import prisma from '@/lib/prisma';
import { NextRequest, NextResponse} from 'next/server'
 import * as yup from 'yup';

//rag
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: NextRequest) { 
    //const { searchParams}=new URL(request.url); //const take = searchParams.get('take') ?? '10';
    
    const searchParams = request.nextUrl.searchParams
    const take = Number.parseInt(searchParams.get('take') ?? '10');
    const skip = Number.parseInt(searchParams.get('skip') ?? '0');

    if(isNaN(take) || take < 1){
        return NextResponse.json({ message:'Take debe ser un numero entero positivo'}, {status:400})
    }

    if(isNaN(skip) || skip < 0  ){
        return NextResponse.json({ message:'Skip debe ser un numero entero positivo'}, {status:400})
    }

    const todos = await prisma.todo.findMany({
        take: take,
        skip: skip
    });
    
    return NextResponse.json(todos);
}



const postsSchema = yup.object({
    description: yup.string().required(), //mas condicionees con .algo
    complete: yup.boolean().optional().default(false) //TODO: mostrar algo interesante
})

export async function POST(request: Request) { 

    try {
        const { description, complete } = await postsSchema.validate(  await request.json() ); //body:request.json()
        const todo =  await prisma.todo.create({ data:{ description,complete } });
        return NextResponse.json({ todo }, { status: 200 } );

    } catch (e) {
        return NextResponse.json({ error:e}, { status: 400 } );
    }

}



// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function DELETE(request: NextRequest){
    const deletedItems = await prisma.todo.deleteMany({ where:{ complete:true}});
    return NextResponse.json( deletedItems, {status: 200});
}