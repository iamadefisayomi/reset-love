"use client"

import BaseLayout from '@/sections/layout'
import Mission from '@/sections/mission'

export default function About () {

  return (
    <BaseLayout>
      <div className='pt-24 bg-gradient-to-b from-[#2F3748] to-[#1a1f29]'>
        Home page 
        <Mission />
      </div>
    </BaseLayout>
  )
}