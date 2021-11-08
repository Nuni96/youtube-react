import React, { useState } from "react";
import "../style/video.css";

const Searchbar = ({ setVideos, setSelectedVideo, handleFormSubmit }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(input);
    setInput("");
  };

  const clickHandler = () => {
    setSelectedVideo(null);
    setVideos([]);
    setInput("");
  };
  return (
    <>
      <h2>
        <img
          className="image"
          onClick={clickHandler}
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
          alt="youtube logo"
        />
      </h2>
      <div className="search-bar ui segment">
        <form onSubmit={handleSubmit} className="ui form" >
          <div className="field" >
            <label htmlFor="video-search">Video Search</label>
            <input
            style={{borderRadius: "20px"}}
              onChange={handleChange}
              name="video-search"
              type="text"
              value={input}
              placeholder="Search.."
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
