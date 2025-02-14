import { useNavigate } from "react-router-dom";
import { newOrder } from "../../services/backend";
import { getProductsCart } from "../../services/cart";

import useForm from "../../hooks/useForm";
import "./OrderForm.css";

const OrderForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    email: "",
  };

  const [state, changeHandler] = useForm(initialState);
  const navigate = useNavigate();

  const orderHandler = async (e) => {
    e.preventDefault();
    const products = getProductsCart();
    const productId = [];

    for (const product of products) {
      productId.push(product.id);
    }

    const data = {
      contact: state,
      products: productId,
    };

    const order = await newOrder(data);

    navigate(`/confirmation/${order.orderId}`);
  };

  return (
    <main className="limitedWidthBlockContainer order-main">
      <div className="limitedWidthBlock" id="limitedWidthBlock">
        <div className="cartAndFormContainer" id="cartAndFormContainer">
          <div className="cart__order">
            <form method="get" className="cart__order__form">
              <div className="cart__order__form__question">
                <label htmlFor="firstName">Prénom: </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={state.firstName}
                  onChange={changeHandler}
                  required
                />
                {/* <p id="firstNameErrorMsg">
              <!-- ci est un message d'erreur -->
            </p> */}
              </div>
              <div className="cart__order__form__question">
                <label htmlFor="lastName">Nom: </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={state.lastName}
                  onChange={changeHandler}
                  required
                />
                <p id="lastNameErrorMsg"></p>
              </div>
              <div className="cart__order__form__question">
                <label htmlFor="address">Adresse: </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={state.address}
                  onChange={changeHandler}
                  required
                />
                <p id="addressErrorMsg"></p>
              </div>
              <div className="cart__order__form__question">
                <label htmlFor="city">Ville: </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={state.city}
                  onChange={changeHandler}
                  required
                />
                <p id="cityErrorMsg"></p>
              </div>
              <div className="cart__order__form__question">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={state.email}
                  onChange={changeHandler}
                  required
                />
                <p id="emailErrorMsg"></p>
              </div>
              <div className="cart__order__form__submit">
                <input
                  type="submit"
                  value="Commander !"
                  id="order"
                  onClick={orderHandler}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderForm;
