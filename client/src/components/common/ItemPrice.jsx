import React from "react";
import { formatMoney } from "../../utils/formatMoney";
import shipping_logo from "../../assets/ic_shipping.png";

export const ItemPrice = ({ props, styles }) => {
  return (
    <div className={styles}>
      <span>{`$ ${formatMoney({
        price: props.price,
      })}`}</span>
      <span>{props.decimals === 0 ? "00" : props.decimals}</span>
      {props.shipping && (
        <img src={shipping_logo} alt="shipping" title="shipping" />
      )}
    </div>
  );
};
