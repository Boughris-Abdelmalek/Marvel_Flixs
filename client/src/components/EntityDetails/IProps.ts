import { RootState } from "../../app/store";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

interface Data {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

export interface IProps {
  renderHook: (id: number) => {
    isFetching: boolean;
    data: Data;
  };
  selectEntityById: (state: RootState) => Data;
  getEntityById: (data: Data) => ThunkAction<void, RootState, undefined, AnyAction>;
}
