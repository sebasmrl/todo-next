'use server';

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";



export const getProductsNumberOnCartAction =():number =>{
    const cookieStore = cookies();
    const cookieCart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');
    revalidatePath('/dashboard/products');

    return (Object.values<number>(cookieCart).length > 0)
        ? Object.values<number>(cookieCart).reduce((prev, curr)=> prev+curr)
        : 0;
}




//?Nota las ServerActions resuelven Promesas, si se llaman desde el server 
//?retornaran una promise pero el tipado no la capta
