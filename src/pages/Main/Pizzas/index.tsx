import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from '../../../components/Snacks'

import { getPizzas } from "../../../services/api"

export default function Pizzas() {
  const [pizzas, setDrinks] = useState([])

  useEffect(() => {
    ;(async () => {
      const pizzasRequest = await getPizzas()

      setDrinks(pizzasRequest.data)
    })()
  }, [])

    return (
        <>
            <Head title="Pizzas"/>
            <SnackTitle>Pizzas</SnackTitle>
            <Snacks snacks={pizzas}></Snacks>
        </>
    )
}