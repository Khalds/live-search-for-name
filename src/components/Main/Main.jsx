import React, { useState } from "react"
import styles from "./Main.module.css"
import { Product } from "../Product/Product"
import { allProducts } from "../../utils/constants"

function Main() {
  const [products, setProducts] = useState(allProducts)
  const [text, setText] = useState("")

  const textHandler = (e) => {
    setText(e.target.value)
    if (e.target.value === "") {
      setProducts(allProducts)
      return
    }
    setProducts(
      products.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    )
  }

  return (
    <>
      <div className={styles.inputBlock}>
        <input type="text" value={text} onChange={textHandler} />
      </div>
      <div className={styles.cards}>
        {products.map((item) => {
          return <Product {...item} />
        })}
      </div>
    </>
  )
}

export default Main
