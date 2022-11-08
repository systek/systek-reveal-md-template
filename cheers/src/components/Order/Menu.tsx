import { Option } from "@swan-io/boxed";
import { MenuDTO } from "../../api";

import { capitalize } from "../../utils/string";
import { Props, TestId } from "./types";

const price = (key: string, val: string) => (
  <>
    {capitalize(key)}: <span>{val},-</span>
  </>
);
const Menu = ({ menu }: Pick<Props, "menu">) =>
  Option.fromNullable(menu)
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
export default Menu;
