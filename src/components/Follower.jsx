import React from "react";

const Follower = ({ follower }) => {
  const { node_id, login, avatar_url, url, html_url } = follower;

  return (
    <>
      <div className="flex ml-8 mb-4 mt-2 ">
        <div>
          <img
            className="rounded-full flex mt-2"
            style={{ height: "40px", width: "40px" }}
            src={avatar_url}
          />
        </div>
        <div className="ml-4">
          <span className="font-bold"> {login} </span>
          <p>
            <a href={html_url} target="_blank">
              {html_url}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Follower;
