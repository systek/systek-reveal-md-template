import { Result } from "../../api";

export type Props = {
  order: Result.Order;
};

export enum TestId {
  ok = "customer-ok",
  error = "customer-error",
}
