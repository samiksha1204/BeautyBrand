import React from 'react'
import styles from '../style'
import { discount,BEAUTY,tryim,best} from '../assets'
import GetStarted from './GetStarted'
const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col 
    ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}>

        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 '>
          <img src={discount}
          alt="discount"
          className='w-[32px] h-[32px]'
          />
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>20% </span>
          Discount For {"  "}
          <span className='text-white'>1</span>
          <sup className='text-white sups'>st </sup>
          <span className='text-dimwhite'>Time </span>
          User
          </p>
         

        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[71px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Unveiling Tomorrow's <br className='sm:block hidden'/>{" "}
            <span className='text-gradient'>Beauty </span>{" "}  
          </h1>
          <div className='ss:flex hidden md:mr-4 mr:0 '>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px]
         text-white ss:leading-[100px] leading-[75px] w-full'>
        Secrets.
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>

Our expertly crafted products harness the power of natural ingredients to enhance your radiance. Join us on a journey to embrace and enhance your natural beauty, effortlessly. </p>
      </div>
<div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
  <img src={best} alt='billing'
  className='w-[200%] h-[100%] relative z-[5]'/>
  <div className='absolute z-[0] w-[20%] h-[50%] top-0 pink__gradient'/>
  <div className='absolute z-[1] w-[30%] h-[50%] rounded-full bottom-5 white__gradient'/>

  <div className='absolute z-[0] w-[20%] h-[40%] right-20 bottom-50 blue__gradient'/>

</div>
<div className={`ss:hidden ${styles.flexCenter} md:my-0 my-10 relative`}></div>
    </section>
  )


export default Hero