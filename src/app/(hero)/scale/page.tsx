import Hero from '@/components/hero'
import React from 'react'
import scaleSrc from '/public/scale.png'

export default function Page() {
  return (
    <Hero imgURL={scaleSrc} altText='P Image' content='夫子庙'/>
  )
}
