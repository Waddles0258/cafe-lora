import { Drink } from "../Drink"
import React from "react"
import {drinks} from '../../../public/drinks'

export const Menu =()=>{
    return(<>
    <section id="menu" className="menu">
        <div className="container">
          <h2>Naše nabídka</h2>
          <p className="menu-intro">
            Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
          </p>
          <div className="drinks-list">
          {drinks.map((prvek, index) => (
              <Drink key={index} name={prvek.name} image={prvek.image} layers={prvek.layers}/>
            ))}
          </div>

          <div className="order-detail">
            <a href="/order.html">Detail objednávky</a>
          </div>
        </div>
      </section>
    </>)
}