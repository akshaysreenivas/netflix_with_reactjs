import React, { Fragment, useEffect, useState } from "react";
import YouTube from "react-youtube";
import axiosInstance from "../../Axios";
import { IMG_URL, VIDEO_CLIP } from "../../Constants/Constants";
import "./RowPosters.css";
const RowPosters = ({ size, title, type }) => {
  const [posters, setPosters] = useState([]);
  const [videokey, setVideokey] = useState();
  useEffect(() => {
    axiosInstance.get(`${type}`).then((response) => {
      const newPoters = JSON.parse(response.data).results;
      setPosters(newPoters);
    });
  }, [type]);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <Fragment>
      <div className="row ps-2 pt-2 m-0 mb-3">
        <h2 className="text-white">{title}</h2>
        <div className="posters d-flex gap-1 p-0">
          {posters.map((poster) => {
            const showid = () => {
              axiosInstance
                .get(`/movie/${poster.id}+${VIDEO_CLIP}`)
                .then((response) => {
                  const newVideos = JSON.parse(response.data).results[0];
                  if (newVideos.length !== 0) {
                    if (videokey) {
                      setVideokey("");
                    }else{
                      setVideokey(newVideos.key);
                    }
                  }
                });
            };
            return (
              <div key={poster.key} onClick={showid} className="poster">
                <img
                  className="rounded"
                  src={`${IMG_URL + size + poster.backdrop_path}`}
                  alt="poster"
                />
              </div>
            );
          })}
        </div>
      </div>
      {videokey && <YouTube videoId={videokey} opts={opts} />}
    </Fragment>
  );
};

export default RowPosters;
