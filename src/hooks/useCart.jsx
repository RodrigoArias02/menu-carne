import { useContext } from "react"
import { CartContext } from "../context/cartContext.jsx"

export function useCart() {
  return useContext(CartContext)
}