import React from 'react'

const ProductCard = ({ content, name, img }) => (
  <div className='flex flex-col px-5 py-12 rounded-[20px] max-w-[280px]
    md:mr-10 sm:mr-5 mr-0 my-5 product-card'>
    <div className='flex flex-col items-center'> {/* Center the content */}
      <img src={img} alt={name} className='w-[42px] h-[50px] object-contain' />
      <div className="mt-5"> {/* Add margin-top to create a gap */}
        <h4 className='font-poppins font-semibold text-[25px] text-center leading[32px] text-white '>{name}</h4>
      </div>
      <p className='font-poppins font-normal text-[18px] leading[32px] text-white my-10'>
        {content}
      </p>
    </div>
  </div>
)

export default ProductCard
