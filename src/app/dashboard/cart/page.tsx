import { WidgetItem } from "@/components";
import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { getProductOnCartServerHelper } from "@/shopping-cart/helpers/server-helpers";
import { cookies } from "next/headers";


export const metadata = {
 title: 'Carrito de Compras',
 description: 'Carrito de Compras',
};

export default function CartPage() {

  const cookieStore = cookies();
  const cookieCart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');

  const products = getProductOnCartServerHelper(cookieCart);
  const totalToPay = products.reduce( (prev, curr)=> (curr.product.price*curr.quantity)+prev,0 );
  //console.log(products);

  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Carrito de Compras</h1>
      <hr className="mb-2" />

      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 sm:w-8/12 w-full">
            {
                products.map(({product, quantity})=>(
                  <ItemCard key={product.id} product={product} quantity={quantity} />
                )) 
            }
        </div>
        <div className="flex flex-col w-full sm:w-4/12">
           <WidgetItem title="Total a Pagar">
              <div className="flex mt-2 gap-4 justify-center">
                <h3 className="text-3xl font-bold text-gray-700">${ (totalToPay*1.15).toFixed(2) }</h3>
              </div>
              <span className="font-bold text-center text-gray-500">Impuesto 15%: ${ (totalToPay*0.15) }</span>
            </WidgetItem>  
        </div>
      </div>

    </div>
  );
}