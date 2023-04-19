import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
      <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
          <Layout className='py-8 lg:py-6 flex lg:flex-col items-center justify-between'>
              <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
              <div className='flex items-center lg:py-2'>
                  Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by &nbsp;<Link href={"/"}>Ariful Islam</Link>
              </div>
              <Link href={"/"}>Say hello</Link>
          </Layout>
    </footer>
  )
}

export default Footer