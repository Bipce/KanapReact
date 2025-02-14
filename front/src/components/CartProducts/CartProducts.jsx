import "./CartProducts.css";

const CartProducts = ({ products, onQuantityChange, onDeleteProduct }) => {
  const getArticlesNbr = () => {
    let articles = 0;

    for (const product of products) {
      articles += product.quantity;
    }
    return articles;
  };

  const getTotalPrice = () => {
    let totalPrice = 0;

    for (const product of products) {
      totalPrice += product.price * product.quantity;
    }
    return totalPrice;
  };

  return (
    <main className="limitedWidthBlockContainer">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="cartAndFormContainer" id="cartAndFormContainer">
          <h1>Votre panier</h1>
          <section className="cart">
            <section id="cart__items">
              {products.map((product, i) => {
                return (
                  <article className="cart__item" key={i} data-id={product.id}>
                    <div className="cart__item__img">
                      <img
                        src={product.imageUrl}
                        alt="Photographie d'un canapé"
                      />
                    </div>
                    <div className="cart__item__content">
                      <div className="cart__item__content__titlePrice">
                        <h2>
                          {product.name} {product.color}
                        </h2>
                        <p>{product.price} €</p>
                      </div>
                      <div className="cart__item__content__settings">
                        <div className="cart__item__content__settings__quantity">
                          <p>Qté : </p>
                          <input
                            type="number"
                            className="itemQuantity"
                            name="itemQuantity"
                            min="1"
                            max="100"
                            value={product.quantity}
                            onChange={(e) =>
                              onQuantityChange(
                                parseInt(e.target.value),
                                product
                              )
                            }
                          />
                        </div>
                        <div className="cart__item__content__settings__delete">
                          <p
                            className="deleteItem"
                            onClick={() => onDeleteProduct(product)}
                          >
                            Supprimer
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <div className="cart__price">
              <p>
                Total (<span id="totalQuantity">{getArticlesNbr()}</span>{" "}
                articles) : <span id="totalPrice">{getTotalPrice()}</span> €
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CartProducts;
