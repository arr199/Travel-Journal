import React from "react"
import { Navbar } from "./components/Navbar.js" 
import { Card } from "./components/Card.js"
import { data } from "./data.js"


export const App = () => {
    
      const newCard = data.map( (item) => {
            return (
                  <Card 
                        item={item}
                  />    
            )
      } )
   
        return(
               <section >
                     <Navbar/>
                     <main >
                     
                     {newCard}
                     </main>
               </section> 
        )  
}