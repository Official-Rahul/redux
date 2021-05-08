import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, addProduct } from "./productSlice";
import styles from "./Product.module.css";

export function Product() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [productToAdd, setProductToAdd] = useState("");

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
          onClick={() => dispatch(addProduct(productToAdd))}
        >Add Product</button>
      </div>
    </div>
  );
}
