import React, { useEffect } from "react";
import "../style/video.css";
import saveData from "../apis/saveData";
const VideoDetail = ({ video, temp, setTemp }) => {
  
  const clickHandler = () => {
    
    for (let i = 0; i < temp.length; i++) {
      temp[i].etag = "We changed JSON response data!";
    }
    setTemp(temp)
    saveData(temp)
  };

  useEffect(() => {
  }, [temp]);

  if (!video) {
    return <div />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <div>
        <h3>JSON DATA:</h3>
        <button
          onClick={clickHandler}
          type="button"
          className="btn btn-primary"
        >
          Click me to change JSON data
        </button>
        <p>Check the console to see changes made to JSON response data (etag has a different value now)</p>
        {temp.map((data, key) => {
          return (
            <div className="json" key={key}>
              <p>
                <strong>etag:</strong> "{data.etag}"
              </p>
              <div>
                <p>
                  <strong>{`id: {`}</strong>
                </p>
                <p>
                  &emsp;<strong>kind:</strong> "{data.id.kind}"
                </p>
                <p>
                  &emsp;<strong>videoId:</strong> "{data.id.videoId}"
                </p>
                <p>{`}`}</p>
              </div>
              <p>
                <strong>kind:</strong> "{data.kind}"
              </p>
              <div>
                <p>
                  <strong>{`snippet: {`}</strong>
                </p>
                <p>
                  &emsp;<strong>channelId:</strong> "{data.snippet.channelId}"
                </p>
                <p>
                  &emsp;<strong>channelTitle:</strong> "
                  {data.snippet.channelTitle}"
                </p>
                <p>
                  &emsp;<strong>description:</strong> "
                  {data.snippet.description}"
                </p>
                <p>
                  &emsp;<strong>liveBroadcastContent:</strong> "
                  {data.snippet.liveBroadcastContent}"
                </p>
                <p>
                  &emsp;<strong>publishedTime:</strong> "
                  {data.snippet.publishedTime}"
                </p>
                <p>
                  &emsp;<strong>publishedAt:</strong> "
                  {data.snippet.publishedAt}"
                </p>
                <div>
                  <p>
                    &emsp;&emsp;<strong>{`thumbnails: {`}</strong>
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;<strong>{`default: {`}</strong>
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>height: </strong>"
                    {data.snippet.thumbnails.default.height}"
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>url: </strong>"
                    {data.snippet.thumbnails.default.url}"
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>width: </strong>"
                    {data.snippet.thumbnails.default.width}"
                  </p>
                  <p>&emsp;&emsp;&emsp;{`}`}</p>
                  <p>
                    &emsp;&emsp;&emsp;<strong>{`high: {`}</strong>
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>height: </strong>"
                    {data.snippet.thumbnails.high.height}"
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>url: </strong>"
                    {data.snippet.thumbnails.high.url}"
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>width: </strong>"
                    {data.snippet.thumbnails.high.width}"
                  </p>
                  <p>&emsp;&emsp;&emsp;{`}`}</p>
                  <p>
                    &emsp;&emsp;&emsp;<strong>{`medium: {`}</strong>
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>height: </strong>"
                    {data.snippet.thumbnails.medium.height}"
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>url: </strong>"
                    {data.snippet.thumbnails.medium.url}"
                  </p>
                  <p>
                    &emsp;&emsp;&emsp;&emsp;<strong>width: </strong>"
                    {data.snippet.thumbnails.medium.width}"
                  </p>
                  <p>&emsp;&emsp;&emsp;{`}`}</p>
                </div>
                <p>
                  &emsp;&emsp;<strong>{`title: `}</strong>"{data.snippet.title}"
                </p>

                <p>{`}`}</p>
                <br />
                <br />
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoDetail;
