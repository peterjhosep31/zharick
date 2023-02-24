import React from 'react'
import { Logo } from "../../UI/Logo/Logo";
import { Navbar } from "../../UI/Navbar/Navbar";
import { Button } from "../../UI/Button/Button";
export  function Header() {
  return (
   <header>
    <Logo/>
    <Navbar/>
    <Button/>
   </header>
  )
}
