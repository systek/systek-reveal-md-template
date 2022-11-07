import React from "react";
import { Async, Result as DataResult } from "../api";
import { AsyncData, Result } from "@swan-io/boxed";
import { Order, Props as OrderProps } from "./Order";
import { Served } from "./Served";

export type Props = {
  order: Async.Order;
} & Pick<OrderProps, "menu" | "orderAction">;

export enum TestId {
  order = "customer-order",
  loading = "customer-loading",
  served = "customer-served",
}
const Customer = ({ order, menu, orderAction }: Props) => (
  <div className="customer">
    {order.match({
      NotAsked: () => (
        <Order {...{ "data-testid": TestId.order, menu, orderAction }} />
      ),
      Loading: () => <h3 data-testid={TestId.loading}>...</h3>,
      Done: (result) => <Served data-testid={TestId.served} order={result} />,
    })}
  </div>
);

export default Customer;
