import React from 'react'
import { feedback } from '../constatnts'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
const Tastimonials = () => 
   (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      
      <div className='absolute z-[0] w-[100%] h-[100%] -right-[0%] rounded-[20px] bg-black-gradient-2 mb-10'/>
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        
        
        <h1 className={`${styles.heading2} ml-5 text-center`}>What people are saying about us</h1>
     
      </div>
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] mb-5'>
        {feedback.map((card)=>(
          <FeedbackCard key={card.id}{...card}/>
        ))}

      </div>
    </section> 
  )


export default Tastimonials