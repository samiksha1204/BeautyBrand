import React from 'react'
import { card } from '../assets'
import styles,{layout} from '../style'
import Button from './Button'
const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Discover the Perfect Beauty Card Deal with Our Beauty Assistant  <br className="sm:block hidden"/>
      in Just a Few Easy Steps! </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Your trusted partner in finding the ideal beauty card deals. We understand the importance of affordable beauty products and services, and we've designed a simple process to help you uncover the perfect deals effortlessly.
      </p>
      <div className='absolute z-[0] w-[40%] h-[50%] top-0 pink__gradient'/>
  <div className='absolute z-[1] w-[40%] h-[50%] rounded-full bottom-10 white__gradient'/>

  <div className='absolute z-[0] w-[30%] h-[40%] right-20 bottom-50 light__gradient'/>
      <Button styles="mt-10"/>
    </div>
    <div className={layout.sectionImg}>
      <img src={card} alt="card"
      className='w-[100%] h-[100%]' />

    </div>
    
  </section>
)

export default CardDeal