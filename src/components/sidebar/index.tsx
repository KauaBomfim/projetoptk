import { useState } from "react"
import { NavLink } from "react-router-dom"

import { Container } from "./style"

import { ReactComponent as BurguerIcon } from "../../assets/burger.svg"
import { ReactComponent as PizzaIcon } from "../../assets/pizza.svg"
import { ReactComponent as SodaPopIcon } from "../../assets/soda.svg"
import { ReactComponent as IceCreamIcon } from "../../assets/ice-cream.svg"

import menuImg from "../../assets/menu.svg"

export function Siderbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <Container isMenuOpen={menuOpen}>
            <button type="button" onClick={handleToggleMenu}>
                <img src={menuImg} alt="icone de menu" />
            </button>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">
                            <BurguerIcon/>
                            <span>Hambúrgueres</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="Pizzas">
                            <PizzaIcon/>
                            <span>Pizzas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="Drinks">
                            <SodaPopIcon/>
                            <span>Bebidas</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="Desserts">
                            <IceCreamIcon/>
                            <span>Sobremesas</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}