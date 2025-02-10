import React from 'react'
import { useShoesContext } from '../context/CartContext'

function ShoesProduct() {
    const { products, addToCart } = useShoesContext()
    function handleAddToCart(productItem) {
        addToCart(productItem)
    }

    return (
        <>
            <div className="cardBody">
                {products.map((value) => (
                    <div className="shopItem" key={value.id}>
                        <div
                            className="shopItem_image"
                            style={{ backgroundColor: "rgb(212, 215, 214)" }}
                        >
                            <img
                                alt=""
                                src={value.image}
                            />
                        </div>
                        <div className="shopItem_name">{value.name}</div>
                        <div className="shopItem_description">
                            {value.description}
                        </div>
                        <div className="shopItem_bottom">
                            <div className="shopItem_price">${value.price}</div>
                            <div className="shopItem_button" onClick={() => handleAddToCart(value)}>
                                <p>ADD TO CART</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ShoesProduct