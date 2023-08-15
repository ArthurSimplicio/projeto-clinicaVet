import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-slate-50 border-t-2 border-solid border-black font-medium text-sm md:text-lg sm:px-12">
    <Layout className="py-4 flex items-center justify-around">
        <span className=' lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center font-[Poppins]'>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center lg:text-4x1 md:pl-24 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center font-[Poppins]">
        Build With<span className="text-red-600 text-2xl px-1">&#9825;</span>by&nbsp;
        <Link href="https://www.instagram.com/arthursimplcio/" target="_blank" className="underline underline-offset-2">Arthur</Link>
        </div>
        <Link href="/" className="lg:text-4x1 text-3x1 md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5 text-center font-[Poppins] underline underline-offset-2">SayHello</Link>
    </Layout>
</footer>
  )
}

export default Footer