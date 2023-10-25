// life cycle of zabo
export enum ZaboState {
  // at pending, it is invisible
  PENDING_STATE = "PENDING_STATE",

  // at before, it is half show. it gets ready to move to current_state
  BEFORE_STATE = "BEFORE_STATE",

  // at current, it is shown to user
  CURRENT_STATE = "CURRENT_STATE",

  // at shown state, it is already shown. So it is invisible.
  SHOWN_STATE = "SHOWN_STATE",
}
