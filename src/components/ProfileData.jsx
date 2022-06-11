import React from "react";
import styled from "styled-components";
const ProfileData = ({ info, rateData }) => {
  console.log(info);
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    followers_url,
    gists_url,
    name,
    company,
    location,
    twitter_username,
    html_url,
    public_gists,
    bio,
  } = info;

  const { limit, remaining } = rateData;

  // console.log(avatar_url);
  return (
    <>
      {info && (
        <>
          <div>
            <p> Followers: {followers} </p>
            <p>Following:{following} </p>
            <p> Repos:{public_repos} </p>
            <p>Public Gists: {public_gists}</p>
            <p>
              <a href={html_url}>Github Link</a>
            </p>
          </div>
          <div></div>
          <div>
            <img src={info.avatar_url} />
            <p>Twitter: {twitter_username}</p>
            <p>Location: {location}</p>
            <p>Company:{company}</p>
            <p>Bio: {bio}</p>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileData;
