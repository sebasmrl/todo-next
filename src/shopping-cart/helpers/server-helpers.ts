import { Product, products } from "@/products/data/products";

export interface ProductOnCart{
    product: Product;
    quantity:number;
}

export const getProductOnCartServerHelper =(cookieCart:{ [id:string]:number}):ProductOnCart[] =>{

    const productsOnCart:ProductOnCart[] = [];
    
    Object.keys(cookieCart).forEach( (productId)=>{
        const product = products.find((p)=>p.id == productId);
        if(product) 
            productsOnCart.push({ product, quantity: cookieCart[productId]});
    });
    
    //console.log(productsOnCart)
    return productsOnCart;
}


export const getTotalCountProducts = (cookieCart: { [id: string]: number }):number => {
    let items = 0;
    Object.values( cookieCart ).forEach( (value) => {
      items += value as number;
    })
  
    return items;
  }

