import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { useGetComicsByIdQuery } from "../../../features/Comics/ComicsApiSlice";
import { getComicsById } from "../../../features/Comics/ComicsSlice";

const Comic: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data } = useGetComicsByIdQuery(id ?? "");

  useEffect(() => {
    if (id) {
      dispatch(getComicsById(data));
      console.log(data);
    }
  }, [id]);

  return <div>{id}</div>;
};

export default Comic;
