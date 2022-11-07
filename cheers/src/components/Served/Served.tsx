import { orderTemplate } from "../../api/api";
import { render } from "../../utils/template";
import { Props, TestId } from "./types";

const Served = ({ order, moreBeer, payBill }: Props) => (
  <div className="order">
    {order.match({
      Ok: ({ cost, ...result }) => (
        <>
          <p data-testid={TestId.ok}>
            {render(
              "Here's your {{ipa}} ipa, {{lager}} lager & {{porter}} porter, sir",
              { ...orderTemplate, ...result }
            )}
          </p>
          <p>Current bill i bar: {cost},-</p>
        </>
      ),
      Error: (error) => <p data-testid={TestId.error}>{error as string}</p>,
    })}
    <button onClick={() => moreBeer()}>New Order</button>
    {order.isOk() && (
      <button onClick={() => payBill()}>Bay bill of {order.get().cost}</button>
    )}
  </div>
);

export default Served;
