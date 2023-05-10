import React from 'react'
import Image from 'next/image';

const CustomGifComp = (props) => {
  return (
    <div className='image-containercustom_styles'>
        <Image src={props?.srcData} alt="" layout="fill" className='image_inner_container' />
    </div>
  )
}

export default CustomGifComp