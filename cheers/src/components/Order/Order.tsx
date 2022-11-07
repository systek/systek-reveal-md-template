import { Option } from "@swan-io/boxed";
import { useEffect, useState } from "react";
import { MenuDTO, OrderDTO, Result } from "../../api";

import { capitalize } from "../../utils/string";
import { Props, TestId } from "./types";

const Menu = ({ menu }: Pick<Props, "menu">) => {
  const price = (key: string, val: string) => (
    <>
      {capitalize(key)}: <span>{val},-</span>
    </>
  );

  return Option.fromNullable(menu)
    .map((it) => (it.isDone() ? it.get() : undefined))
    .flatMap((it) =>
      Option.fromNullable(it).map((itt) => (itt.isOk() ? itt.value : {}))
    )
    .toResult({})
    .map((it) => (
      <section className="menu" data-testid={TestId.menu}>
        <h4>Menu:</h4>
        <ul>
          {Object.entries(it as MenuDTO).map(([key, val]) => (
            <li key={key}>{price(key, val)}</li>
          ))}
        </ul>
      </section>
    ))
    .mapError(() => <></>).value;
};

const Order = ({ orderAction, menu }: Props) => {
  const [order, setOrder] = useState<OrderDTO | undefined>(undefined);

  useEffect(() => {
    if (orderAction && order) {
      orderAction(order);
    }
  }, [orderAction, order]);

  const onOrderSubmit = (e: any) => {
    e.preventDefault();
    const [beer, amount] = Array.from(e.target.querySelectorAll("input")).map(
      ({ value }: any) => value
    );

    setOrder({ [beer]: amount } as unknown as OrderDTO);
  };
  return (
    <div className="order">
      <div className="container">
        <Menu menu={menu} />
        <section data-testid={TestId.order}>
          <h4>Your order:</h4>
          <form onSubmit={onOrderSubmit}>
            <input
              type="text"
              name="beer"
              id="beer"
              size={15}
              placeholder="Type of beer"
            />
            <br />
            <input
              type="number"
              name="amount"
              id="amount"
              size={15}
              placeholder="How many glasses"
            />
            <br />
            <button type="submit">Place Order</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Order;
