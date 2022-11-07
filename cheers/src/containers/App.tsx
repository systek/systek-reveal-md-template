import { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Customer, { Props as CustomerProps } from "../components/Customer";
import { actions as appActions } from "../redux/app";
import { getMenu, getOrder } from "../redux/app/app.selectors";
import { RootState } from "../redux/root.reducer";
import "../style/main.scss";
import { DispatchAction, DispatchProps, StateProps } from "./types";

export type Props = CustomerProps & { init: DispatchAction<void> };
const AppContainer = ({ ...props }: Props) => {
  useEffect(() => {
    if (!!props.init && props.menu.isNotAsked()) {
      props.init();
    }
  }, [props]);
  return (
    <div className="App">
      <Customer {...props} />
    </div>
  );
};
export const mapDispatchToProps = (
  dispatch: Dispatch
): DispatchProps<Props> => ({
  orderAction: bindActionCreators(appActions.orderInit, dispatch),
  init: bindActionCreators(appActions.menuInit, dispatch),
});

export const mapStateToProps = (state: RootState): StateProps<Props> =>
  ({
    order: getOrder(state),
    menu: getMenu(state),
  } as Props);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
