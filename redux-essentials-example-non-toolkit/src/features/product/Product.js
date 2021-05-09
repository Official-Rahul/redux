import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../redux/product/action";
import styles from "./Product.module.css";

export default function Product() {
  const products = useSelector(state => state.products.value);
  const dispatch = useDispatch();
  const [productToAdd, setProductToAdd] = useState('');

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li>{product}</li>
        ))}
      </ul>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Add Product"
          value={productToAdd}
          onChange={(e) => setProductToAdd(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(add(productToAdd))}
        >
          Add Product
        </button>
      </div>
    </div>
  );
}
