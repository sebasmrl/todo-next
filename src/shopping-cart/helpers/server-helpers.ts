import { Product, products } from "@/products/data/products";

export interface ProductOnCart{
    product: Product;
    quantity:number;
}

export const getProductOnCartHelper =(cookieCart:{ [id:string]:number}):ProductOnCart[] =>{

    const productsOnCart:ProductOnCart[] = [];
    
    Object.keys(cookieCart).forEach( (productId)=>{
        const product = products.find((p)=>p.id == productId);
        if(product) 
            productsOnCart.push({ product, quantity: cookieCart[productId]});
    });
    
    //console.log(productsOnCart)
    return productsOnCart;
}
