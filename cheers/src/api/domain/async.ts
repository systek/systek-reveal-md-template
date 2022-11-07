/* eslint-disable @typescript-eslint/no-namespace */
import { AsyncData, Result as BoxedResult } from "@swan-io/boxed";
import { OrderDTO } from "./order";

export declare namespace Result {
  type Order = BoxedResult<OrderDTO, unknown>;
  type Menu = BoxedResult<OrderDTO, unknown>;
}

export declare namespace Async {
  type Order = AsyncData<Result.Order>;
  type Menu = AsyncData<Result.Menu>;
}
