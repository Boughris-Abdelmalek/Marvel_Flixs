import { FC } from "react";

import { useGetCharacterByIdQuery } from "../../features/Characters/CharactersApiSlice";
import { getCharacterById, selectCharacterById } from "../../features/Characters/CharactersSlice";

import EntityDetails from "../../components/EntityDetails/EntityDetails";

const Details: FC = () => {
  return (
    <EntityDetails
      renderHook={useGetCharacterByIdQuery}
      selectEntityById={selectCharacterById}
      getEntityById={getCharacterById}
    />
  );
};

export default Details;
