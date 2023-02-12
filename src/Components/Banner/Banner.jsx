import React, { Fragment, useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, IMG_URL } from "../../Constants/Constants";
import axiosInstance from "../../Axios";
const img=IMG_URL+'original'
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axiosInstance
      .get(`/trending/all/day?api_key=${API_KEY}`)
      .then((response) => {
        const newMovie = JSON.parse(response.data).results[0];
        setMovie([newMovie]);
      })
  }, []);

  return (
    <Fragment>
      {movie.map((item) => {
        return (
          <div key={item.id} className="banner d-flex align-items-center" style={{backgroundImage:`url(${movie ? img+item.backdrop_path : ""})`}}>
            <div className="details mx-md-5 mx-3">
              <h1 className="my-3">{movie ? item.title : ""}</h1>
              <button className="px-md-4 px-3 m-2 p-1 d-inline-flex gap-1">
                Play <span className="material-icons">play_arrow</span>
              </button>
              <button className="px-md-4 px-3  m-2 p-1 d-inline-flex">
                My List <span className="material-icons">playlist_add</span>
              </button>
              <h5 className="my-3">{movie ? item.overview : ""}</h5>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
}

export default Banner;
