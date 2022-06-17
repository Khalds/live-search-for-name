import React, { useState } from "react"
import Description from "../Description/Description"

import styles from "./Product.module.css"

export const Product = (props) => {
  const [isModalVisible, setModal] = useState(false)

  return (
    <div key={props.id} className={styles.card}>
      <div className={styles.cardImg}>
        <img src={props.img} alt="" />
      </div>

      <div className={styles.cardInfo}>
        {isModalVisible && (
          <>
            <div className={styles.infoText}>
              <span onClick={() => setModal(false)}>✖</span>
              {props.text}
            </div>
          </>
        )}
        <div className={styles.cardDetails}>
          <div className={styles.cardName}>
            <p>{props.name}</p>
            <p>${props.price}</p>
          </div>
          <div className={styles.cardDetailBut}>
            <button onClick={() => setModal(true)}>Детали</button>
          </div>
        </div>
        <Description infoText={props.text} />
      </div>
    </div>
  )
}
