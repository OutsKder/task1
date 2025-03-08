import Hero from '@/components/hero'
import React from 'react'
import performanceSrc from '/public/performance.png'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'performance',
}
export default function Page() {
  return (
    <Hero imgURL={performanceSrc} altText='P Image' content='天下文枢'/>
  )
}
