import { Async, OrderDTO } from "../../api";
import { DispatchAction } from "../../containers/types";

export type Props = {
  menu: Async.Menu;
  orderAction: DispatchAction<OrderDTO>;
};
export enum TestId {
  menu = "customer-menu",
  header = "customer-header",
  order = "customer-order",
}
