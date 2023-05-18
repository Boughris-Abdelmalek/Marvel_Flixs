import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useGetComicsByIdQuery } from "../../../features/Comics/ComicsApiSlice";
import { getComicsById, selectComicById } from "../../../features/Comics/ComicsSlice";
import { ComicHeroSection } from "./Styles";

const Comic: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetComicsByIdQuery(id);

  const dispatch = useAppDispatch();
  const comic = useAppSelector(selectComicById);

  useEffect(() => {
    if (data) {
      dispatch(getComicsById(data));
    }
  }, [data]);

  if (comic) {
    console.log(comic);
  }

  return (
    <>
      <ComicHeroSection>
        <div>
          <img src={`${comic?.thumbnail}`} alt="Comic Image" />
        </div>
        <div>
          <h1>{comic?.title}</h1>
          <h3>Published date</h3>
          <span>
            <h5>writter</h5>
            <p>writter name</p>
          </span>
          <span>
            <h5>Penciler</h5>
            <p>penciler name</p>
          </span>
        </div>
        <span>
          <h5>Cover Artist</h5>
          <p>cover artist name</p>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quibusdam, reprehenderit
          accusantium minus impedit nulla nesciunt in obcaecati ex architecto.
        </p>
      </ComicHeroSection>
      <section>
        <h3>Details</h3>
      </section>
    </>
  );
};

export default Comic;
