import React from 'react';
import { pizzaProducts } from '../../assets/data/products';
import { ProductCard } from '../shared';
console.log(pizzaProducts);

function HotPizza() {
   return (
      <section className='mt-10'>
         <h2 className='text-2xl mb-3 text-center font-rnroll font-bold '>
            Hot Pizza
         </h2>
         <div className='flex flex-wrap gap-x-[4%] sm:gap-x-[5%] lg:gap-x-[2.66666667%] gap-y-4 mt-10'>
            {pizzaProducts.map(({ id, title, price, imgUrl02 }) => (
               <ProductCard
                  key={id}
                  title={title}
                  price={price}
                  imgUrl02={imgUrl02}
               />
            ))}
         </div>
      </section>
   );
}

export default HotPizza;