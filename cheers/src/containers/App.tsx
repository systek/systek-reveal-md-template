import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Customer, { Props } from "../components/Customer";
import { actions as appActions } from "../redux/app";
import { getMenu, getOrder } from "../redux/app/app.selectors";
import { RootState } from "../redux/root.reducer";
import "../style/main.scss";
import { DispatchProps, StateProps } from "./types";

const AppContainer = ({ ...props }: Props) => (
  <div className="App">
    <Customer {...props} />
  </div>
);
export const mapDispatchToProps = (
  dispatch: Dispatch
): DispatchProps<Props> => ({
  orderAction: bindActionCreators(appActions.order, dispatch),
});

export const mapStateToProps = (state: RootState): StateProps<Props> =>
  ({
    order: getOrder(state),
    menu: getMenu(state),
  } as Props);

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
