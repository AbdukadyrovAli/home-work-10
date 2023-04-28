import { useReducer } from "react";
import "./App.css";
import Product from "./components/Product";
import TableProduct from "./components/TableProduct";
import { productData } from "./utils/Constanta";

const initialState = {
  product: productData,
};
const onlineReduser = (state, action) => {
  switch (action.type) {
    case "addProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case "incrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
              price: item.price + item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "decrementProduct":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
              price: item.price - item.staticPrice,
            };
          }
          return item;
        }),
      };
    case "remove":
      return {
        ...state,
        product: state.product.map((item) => {
          if (item.id === action.payload && item.quantity !== 0) {
            return {
              ...item,
              quantity: (item.quantity = 0),
              price: item.staticPrice,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
function App() {
  const [store, dispatch] = useReducer(onlineReduser, initialState);

  const incrementProductHandler = (id) => {
    dispatch({ type: "incrementProduct", payload: id });
  };

  const decrementProductHandler = (id) => {
    dispatch({ type: "decrementProduct", payload: id });
  };

  const addProductHandler = (id) => {
    dispatch({ type: "addProduct", payload: id });
  };

  const removeProductHandler = (id) => {
    dispatch({ type: "remove", payload: id });
  };

  return (
    <div className="App">
      <Product store={store.product} addProductHandler={addProductHandler} />
      <TableProduct
        incrementProductHandler={incrementProductHandler}
        store={store.product}
        decrementProductHandler={decrementProductHandler}
        removeProductHandler={removeProductHandler}
      />
    </div>
  );
}

export default App;
