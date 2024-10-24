//ClientSide helpers
import { getCookie, hasCookie, setCookie } from "cookies-next";




export const getCookieCart = ():{[id:string] :  number}=>{
    if(hasCookie('cart')){
        const cookieCart = JSON.parse(getCookie('cart') as string ?? '{}');
        return cookieCart;
    }
    return {};  
}


export const addProductToCart = (id:string)=>{
    const  cookieCart = getCookieCart();

    if(cookieCart[id]){
        cookieCart[id] +=1;
    }else{
        cookieCart[id]=1;
    }
    
    setCookie('cart', JSON.stringify(cookieCart));
    return (Object.values(cookieCart).length > 0)
        ? Object.values(cookieCart).reduce((prev, curr)=> prev+curr)
        : 0;
}





export const deleteOneProductItemFromCart = (id:string)=>{
    const  cookieCart = getCookieCart();

    if(cookieCart[id] && cookieCart[id] >0){
        cookieCart[id] -=1;
        if(cookieCart[id] == 0) delete cookieCart[id];
    }

    setCookie('cart', JSON.stringify(cookieCart));
    return (Object.values(cookieCart).length > 0)
        ? Object.values(cookieCart).reduce((prev, curr)=> prev+curr)
        : 0;
}



export const removeProductFromCart = (id:string):void=>{
    const  cookieCart = getCookieCart();

    if(cookieCart[id] ){
        delete cookieCart[id]
    }else{
        return;
    }
    setCookie('cart', JSON.stringify(cookieCart));
}