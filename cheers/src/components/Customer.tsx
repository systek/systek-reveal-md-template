import { Async } from "../api";
import { Order, Props as OrderProps } from "./Order";
import { Served, Props as ServedProps } from "./Served";
import cheersImage from "../img/cheers.jpeg";
import beersImage from "../img/beer-glass.jpeg";
export type Props = {
  order: Async.Order;
} & Pick<OrderProps, "menu" | "orderAction"> &
  Pick<ServedProps, "moreBeer" | "payBill">;

export enum TestId {
  order = "customer-order",
  header = "customer-header",
  loading = "customer-loading",
  served = "customer-served",
}
const Loading = () => (
  <>
    <h3>Filling up the glasses</h3>
    <img
      src={beersImage}
      data-testid={TestId.loading}
      className="loading"
      alt="Filling your glasses"
    />
  </>
);

const Customer = ({ order, menu, orderAction, moreBeer, payBill }: Props) => (
  <div className="customer">
    <header data-testid={TestId.header}>
      <h3>Welcome to Cheers</h3>
      <img src={cheersImage} alt="Our Bar" />
    </header>
    {order.match({
      NotAsked: () => (
        <Order {...{ "data-testid": TestId.order, menu, orderAction }} />
      ),
      Loading: () => <Loading />,
      Done: (result) => (
        <Served
          {...{
            "data-testid": TestId.served,
            order: result,
            result,
            moreBeer,
            payBill,
          }}
        />
      ),
    })}
  </div>
);

export default Customer;
