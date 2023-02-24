import React from 'react';
import { ItemNav } from '../ItemNav/ItemNav';

export const Navbar = () => {
  return (
   <>
   <nav>
    <ul >
        <li><ItemNav textItem="Sobre Nosotros" /></li>
        <li><ItemNav textItem="Productos" /></li>
        <li><ItemNav textItem="Servicios" /></li>        
    </ul>
   </nav>

   
   
   </>
  )
}


