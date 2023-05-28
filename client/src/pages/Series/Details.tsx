import { FC } from "react";

import EntityDetails from "../../components/EntityDetails/EntityDetails";

import { getSeriesById, selectSeriesById } from "../../features/Series/SeriesSlice";
import { useGetSeriesByIdQuery } from "../../features/Series/SeriesApiSlice";

const Details: FC = () => {
  return (
    <EntityDetails
      renderHook={useGetSeriesByIdQuery}
      selectEntityById={selectSeriesById}
      getEntityById={getSeriesById}
    />
  );
};

export default Details;
