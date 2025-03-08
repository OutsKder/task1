import Hero from '@/components/hero'
import React from 'react'
import reliabilitySrc from '/public/reliability.png'

export default function Page() {
  return (
    <Hero imgURL={reliabilitySrc} altText='P Image' content='中山陵'/>
  )
}
