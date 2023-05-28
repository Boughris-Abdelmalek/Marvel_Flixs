import { FC } from "react";

import { useGetEventsByIdQuery } from "../../features/Events/EventsApiSlice";
import { getEventsById, selectEventById } from "../../features/Events/EventsSlice";
import EntityDetails from "../../components/EntityDetails/EntityDetails";

const Details: FC = () => {
  return (
    <EntityDetails
      renderHook={useGetEventsByIdQuery}
      selectEntityById={selectEventById}
      getEntityById={getEventsById}
    />
  );
};

export default Details;
