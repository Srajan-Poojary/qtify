import React, { useState } from "react";
import Carousel from "../Carousel/Carousel";
import styles from "./Playlists.module.css";
import Card from "../../Card/Card";

const Playlists = ({ albumType, data, filter }) => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="playlist-parent-container">
      <div className={styles.playlistHeader}>
        <h4>{albumType}</h4>
        <h4 onClick={handleToggle} style={{ cursor: "pointer" }}>
          {toggle ? "Show All" : "Collapse"}
        </h4>
      </div>
      {toggle ? (
        <Carousel data={data} />
      ) : (
        <div className={styles.albumGridContainer}>
          {data.map((album) => (
            <Card
              follows={album.follows}
              albumCover={album.image}
              key={album.id}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Playlists;
