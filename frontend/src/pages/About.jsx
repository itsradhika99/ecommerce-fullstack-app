import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/frontend_assets/assets'
const About = () => {
  return (
    <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1={'ABOUT'} text2={' US'}/> 
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img src={assets.about_img} className='w-full md:max-w-[450px]' alt=''/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id quam laboriosam illum voluptatem minus totam nostrum, sit odit suscipit provident perspiciatis quo. Reiciendis consequatur voluptatem maiores laudantium ipsa quas placeat.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iste perspiciatis sit dolorem, atque corporis, repellat animi fuga quod quibusdam accusamus consequatur necessitatibus dolorum reiciendis odit ea perferendis! Hic, minima.</p>
        <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet perspiciatis quasi, sapiente fugiat temporibus aspernatur unde consequatur repellendus repudiandae doloremque facilis mollitia debitis sint cumque maxime? Aperiam voluptatibus ipsam odio.</p>
      </div>
</div>
<div className='text-xl py-4'>
      <Title text1={'WHY'} text2={' CHOOSE US'}/>
</div>
<div className='flex flex-col md:flex-row text-sm mb-20'>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>
        Quality Assurance
      </b>
      <p className='text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id fuga quo architecto nisi aliquid dolorem neque praesentium earum rem corrupti ratione reiciendis consectetur iste unde eaque expedita, molestias dignissimos.
      </p>
  </div>
  <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>
        Convenience
      </b>
      <p className='text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id fuga quo architecto nisi aliquid dolorem neque praesentium earum rem corrupti ratione reiciendis consectetur iste unde eaque expedita, molestias dignissimos.
      </p>
  </div>
<div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
      <b>
        Exceptional Customer Service
      </b>
      <p className='text-gray-600'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem id fuga quo architecto nisi aliquid dolorem neque praesentium earum rem corrupti ratione reiciendis consectetur iste unde eaque expedita, molestias dignissimos.
      </p>
  </div>
</div>
<NewsLetterBox/>
    </div>
  )
}

export default About
