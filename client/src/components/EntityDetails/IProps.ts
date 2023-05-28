import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";

import { TypedUseQueryStateResult } from "@reduxjs/toolkit/dist/query/react";

export interface IProps {
  renderHook: TypedUseQueryStateResult<YourResult, unknown, any>;
  selectEntityById: RootState;
  getEntityById: (data) => void;
}
