import React, { useEffect, useState } from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import saveData from "../apis/saveData";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [temp, setTemp] = useState([]);

  useEffect(() => {
    async function fetchAPI() {
      const response = await youtube.get("/search", {
        params: {
          q: "how to save json to hard drive",
        },
      });
      setVideos(response.data.items);
      setTemp(response.data.items)
      setSelectedVideo(response.data.items[0]);
    }
    fetchAPI();
  }, []);

  
  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });
    setVideos(response.data.items);
    console.log("this is resp", response);
    saveData(response.data.items)
  };
  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar
        setSelectedVideo={setSelectedVideo}
        setVideos={setVideos}
        handleFormSubmit={handleSubmit}
      />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} setTemp={setTemp} temp={temp} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
