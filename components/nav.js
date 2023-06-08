import Link from 'next/link'
import React from 'react'
import KoreLogoLight from './logos/koreLogoLight'

const Nav = () => {
  return (
    <div className=' flex justify-between p-4 bg-[#222] text-white'>
        <div>
          <div className=' font-bold flex gap-2'>
            <KoreLogoLight />
            <p>
              KORE TRADING
            </p> 
          </div>
        </div>
        <nav className=' flex gap-3 font-thin'>
            <Link href={'/'}>Home</Link>
            <Link href={'/'}>Trading</Link>
            <Link href={'/'}>Bot</Link>
            <Link href={'/'}>Training</Link>
            <Link href={'/'}>Contact</Link>
        </nav>
    </div>
  )
}

export default Nav