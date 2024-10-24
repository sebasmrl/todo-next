import { ItemCard } from "@/shopping-cart/components/ItemCard";
import { getProductOnCartHelper } from "@/shopping-cart/helpers/server-helpers";
import { cookies } from "next/headers";


export const metadata = {
 title: 'Carrito de Compras',
 description: 'Carrito de Compras',
};

export default function CartPage() {

  const cookieStore = cookies();
  const cookieCart = JSON.parse(cookieStore.get('cart')?.value ?? '{}');

  const products = getProductOnCartHelper(cookieCart);
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
      </div>

    </div>
  );
}