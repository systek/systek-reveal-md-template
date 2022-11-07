import { build } from "../utils/path.utils";
import { asUrlParam } from "../utils/path.utils";
import { UrlParam } from "../utils/types";

export const paths = {
  order: {
    "/": build("/", "order", asUrlParam(UrlParam.ordernr)),
    cancel: build("/", "order", asUrlParam(UrlParam.ordernr), "cancel"),
    receipt: build("/", "receipt", asUrlParam(UrlParam.receiptnr)),
  },
};
