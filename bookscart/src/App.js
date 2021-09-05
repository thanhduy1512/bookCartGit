import "./App.css";
import HomePage from "./HomePage";
import CartPage from "./CartPage";
import { Route, Routes } from "react-router-dom";
import BottomBar from "./BottomBar";
import { useState } from "react";
import useFetch from "./services/useFetch";

function App() {
  const [cart, setCart] = useState([]);

  const uniqueSaleUrl =
    "https://tiki.vn/api/personalish/v1/blocks/listings?limit=8&is_mweb=1&category=316&page=1";

  const { data, loading, error } = useFetch(uniqueSaleUrl);
  // console.log(data);
  function addToCart(id) {
    setCart((items) => {
      const itemInCart = items.find((i) => i.id === id);
      if (itemInCart) {
        return items.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...items, { id, quantity: 1 }];
      }
    });
  }

  function updateQuantity(id, quantity) {
    setCart((items) => {
      if (quantity === 0) {
        return items.filter((i) => i.id !== id);
      }
      return items.map((i) =>
        i.id === id ? { ...i, quantity: (i.quantity += quantity) } : i
      );
    });
  }

  return (
    <>
      <div className="background">
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <CartPage
                data={data}
                cart={cart}
                setCart={setCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>
        <BottomBar />
      </div>
    </>
  );
}

export default App;
