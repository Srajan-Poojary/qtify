import React, { useEffect, useState } from "react";
import config from "../../config/config";
import axios from "axios";
import Playlists from "./Playlists/Playlists";

const AlbumSection = () => {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setnewAlbumSongs] = useState([]);
  const [songs, setSongs] = useState([]);

  async function fetchData(url, type) {
    try {
      const response = await axios.get(url);

      if (response) {
        if (type === "top album") setTopAlbumSongs(response.data);
        else if (type === "new album") setnewAlbumSongs(response.data);
        else if (type === "songs") setSongs(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchData(config.URL.topAlbum, "top album");
    fetchData(config.URL.newAlbum, "new album");
    fetchData(config.URL.songs, "songs");
  }, []);

  return (
    <div>
      <Playlists albumType="Top Album" data={topAlbumSongs} filter={false} />
      <Playlists albumType="New Album" data={newAlbumSongs} filter={false} />
    </div>
  );
};

export default AlbumSection;
