
//rag
import { NextResponse} from 'next/server'


export async function GET(request: Request) { 

  return NextResponse.json({
    message: 'Hello World',
    status: 200,
    method: request.method
  });    
}

export async function POST(request: Request) { 

  return NextResponse.json({
    message: 'Hello World',
    status: 200,
    method: request.method
  });    
}


