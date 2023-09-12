import React from 'react'
import styles,{layout} from '../style'
import { features } from '../constatnts'
import Button from './Button'

const FeatureCard=({icon,title,content,index})=>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ?"mb-6":"mb-0"}feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[12px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>

)

const Bussiness = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Your beauty, Your joy,
        <br className='sm:block hidden'/>
        We've got the rest.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Just as the right skincare enhances your beauty, our beauty products elevate your radiance. With a world of choices, we simplify your beauty routine.</p>
         <Button styles="mt-10"/>
      </div>
     
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}

      </div>
    </section>
     //...is for spread syntax spred properties of feature to featureCard
  )
}

export default Bussiness