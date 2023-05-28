import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../app/hooks";

import { useGetComicsByIdQuery } from "../../features/Comics/ComicsApiSlice";
import { getComicsById, selectComicById } from "../../features/Comics/ComicsSlice";

import DetailHero from "../../components/ComicsDetails/DetailHero";
import ComicsDetails from "../../components/ComicsDetails/ComicsDetails";

const Details: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetComicsByIdQuery(Number(id));

  const dispatch = useAppDispatch();
  const comic = useAppSelector(selectComicById);

  /* if (!comic) {
    return null;
  } */
  
  const { thumbnail, title, publishedDate, writer, penciler, description, details } = comic || {};
  
  useEffect(() => {
    if (data) {
      dispatch(getComicsById(data));
    }
  }, [data]);

  return (
    <>
      <DetailHero
        backgroundImage={thumbnail}
        thumbnail={thumbnail}
        title={title}
        publishedDate={publishedDate}
        writer={writer}
        penciler={penciler}
        description={description}
      />
      <ComicsDetails details={details} />
    </>
  );
};

export default Details;
