import { render } from "../../utils/template";
import { Props, TestId } from "./types";

const Served = ({ order }: Props) => {
  return (
    <div className="order">
      {order.match({
        Ok: (result) => (
          <p data-testid={TestId.ok}>
            {render(
              "Here's your {{ipa}} ipas and your {{lager}} lagers, sir",
              result
            )}
          </p>
        ),
        Error: (error) => <p data-testid={TestId.error}>{error as string}</p>,
      })}
    </div>
  );
};

export default Served;
