import React, { useState } from "react"
import styles from "./Main.module.css"
import Description from "../Description/Description"

function Main() {
  const allProducts = [
    {
      img: "https://allstars.ua/upload/iblock/8ba/8bad5122c67fb771eaf8cff112c2c98b.jpg",
      name: "Nike Sneakers",
      price: 120,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, sit!",
    },
    {
      img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa/global/382335/01/fnd/RUS/w/1000/h/1000/fmt/png",
      name: "Puma",
      price: 150,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/ce8a6f3aa6294de988d7abce00c4e459_9366/Krossovki_Breaknet_belyj_FX8707_01_standard.jpg",
      name: "Adidas",
      price: 200,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta beatae natus distinctio!",
    },
    {
      img: "https://static.rendez-vous.ru/files/catalog_models/resize_640x630/2/2609676_krossovki_new_balance_ml574_sero_belyy_zamsha_natural_naya.JPG",
      name: "New Balance",
      price: 100,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, fuga corrupti.",
    },
    {
      img: "https://img.brandshop.ru/cache/products/k/krossovki-adidas-originals-ozweego-core-black-core-black-trace-grey-metallic-01-10_1104x1104.jpg",
      name: "Adidas",
      price: 80,
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    },
    {
      img: "https://img.giglio.com/images/prodZoom/300629.001_2.jpg",
      name: "Gucci",
      price: 220,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A.",
    },
  ]

  const [products, setProducts] = useState(allProducts)

  const [getModal, setModal] = useState(false)

  const [text, setText] = useState("")

  const textHandler = (e) => {
    setText(e.target.value)
    if (e.target.value === "") {
      setProducts(allProducts)
    } else {
      setProducts(
        products.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    }
  }

  return (
    <>
      <div className={styles.inputBlock}>
        <input type="text" value={text} onChange={textHandler} />
      </div>
      <div className={styles.cards}>
        {products.map((item, id) => {
          return (
            <div key={id} className={styles.card}>
              <div className={styles.cardImg}>
                <img src={item.img} alt="" />
              </div>

              <div className={styles.cardInfo}>
                {getModal && (
                  <>
                    <div className={styles.infoText}>
                      <span onClick={(e) => setModal(false)}>✖</span>
                      {item.text}
                    </div>
                  </>
                )}
                <div className={styles.cardDetails}>
                  <div className={styles.cardName}>
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                  <div className={styles.cardDetailBut}>
                    <button onClick={(e) => setModal(true)}>Детали</button>
                  </div>
                </div>
                <Description infoText={item.text} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Main
