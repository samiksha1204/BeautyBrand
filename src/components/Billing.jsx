import React from 'react'
import { product } from '../constatnts'
import styles from '../style'
import ProductCard from './productCard'

const Tastimonials = () => 
   (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full'/>
    
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {product.map((card)=>(
          <ProductCard key={card.id}{...card}/>
        ))}

      </div>
    </section> 
  )


export default Tastimonials