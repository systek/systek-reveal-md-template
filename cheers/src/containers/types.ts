import { ActionTypes } from '../redux';
/* eslint-disable @typescript-eslint/ban-types */
type KeyOfFunctions<Object> = {
    [Key in keyof Object]: Object[Key] extends (...input: unknown[]) => unknown ? Key : never;
}[keyof Object];

// The subset of props to be mapped in `mapDispatchToProps`
export type DispatchProps<Props> = Pick<Props, KeyOfFunctions<Props>>;

// The subset of props to be mapped in `mapStateToProps`
export type StateProps<Props, OwnProps = {}> = Omit<Props, keyof DispatchProps<Props> | 'children' | keyof OwnProps>;

// eslint-disable-next-line
// @ts-ignore
type Fn<H, T> = (..._: H) => T;
export type DispatchAction<T> = Fn<[T], ActionTypes>;
