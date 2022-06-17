import React, { useState } from "react"
import styles from "./Description.module.css"

function Description(props) {
  const [isEmpty, setIsEmpty] = useState(false)
  const [textCart, setTextCart] = useState("Добавить в корзину")

  const changeAddButton = () => {
    setIsEmpty(true)
    setTextCart("Уже в корзине")
  }

  const changeDelButton = () => {
    setIsEmpty(false)
    setTextCart("Добавить в корзину")
  }

  return (
    <>
      <div className={styles.botInfo}>
        <p className={styles.botText}>{props.infoText}</p>
        <div className={styles.botBut}>
          <button disabled={isEmpty} onClick={(e) => changeAddButton()}>
            {textCart}
          </button>
          {isEmpty === true && (
            <p className={styles.delMess} onClick={(e) => changeDelButton()}>
              Удалить из корзины
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Description
