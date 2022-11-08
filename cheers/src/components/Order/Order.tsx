import Menu from "./Menu";
import PlaceOrder from "./PlaceOrder";

import { Props } from "./types";

const Order = ({ orderAction, menu }: Props) => (
  <div className="order">
    <div className="container">
      <Menu menu={menu} />
      <PlaceOrder orderAction={orderAction} />
    </div>
  </div>
);

export default Order;
