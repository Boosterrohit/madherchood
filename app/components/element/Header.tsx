"use client"

import Link from "next/link"
import { Button } from "@/app/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from '../../../public/asset/images/logo.png'
import {MENU} from '../../../data'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold outline-none">
          <img src={logo.src} alt="Logo" className="w-40 h-14 object-contain outline-none"/>
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          <div className="flex gap-6 mx-2">
            {MENU.map((menu) => {
              return (
                <Link href={menu.slug} key={menu.id}>{menu.name}</Link>
              )
            })}
          </div>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-2 px-4 py-2">
            {MENU.map((list) => {
              return (
               <Link href={list.slug} key={list.id}>{list.name}</Link>
             )
           })}
            <Link href="/login">
              <Button variant="outline" className="w-full">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="w-full">Sign Up</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

