import { FC } from "react";

import { useGetCreatorsByIdQuery } from "../../features/Creators/CreatorsAPiSlice";
import { getCreatorsById, selectCreatorsById } from "../../features/Creators/CreatorsSlice";

import EntityDetails from "../../components/EntityDetails/EntityDetails";

const Details: FC = () => {
  return (
    <EntityDetails
      renderHook={useGetCreatorsByIdQuery}
      selectEntityById={selectCreatorsById}
      getEntityById={getCreatorsById}
    />
  );
};

export default Details;
