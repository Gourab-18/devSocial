import React from "react";

const Followers = ({ followers }) => {
  return (
    <>
      {followers.map((follower) => {
        return <article key={follower.node_id}>{follower.login}</article>;
      })}
    </>
  );
};

export default Followers;
