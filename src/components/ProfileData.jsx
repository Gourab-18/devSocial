import React from "react";
import styled from "styled-components";
import IndivisualData from "./IndivisualData";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import PersonalData from "./PersonalData";
const ProfileData = ({ info, rateData, followingPeople }) => {
  // console.log(info);
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

  const items = [
    {
      id: 1,
      icon: <GoRepo />,

      name: "Repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers />,
      name: "Followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus />,
      name: "Following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist />,
      name: "Gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <>
      {info && (
        <>
          <div className="flex justify-around mb-6 mt-16">
            {/* <p> Followers: {followers} </p>
            <p>Following:{following} </p>
            <p> Repos:{public_repos} </p>
            <p>Public Gists: {public_gists}</p> */}

            {items.map((item) => {
              return (
                <article key={item.id}>
                  <IndivisualData item={item} />
                </article>
              );
            })}
          </div>
          <div></div>
          <div>
            <PersonalData info={info} followingPeople={followingPeople} />
          </div>
        </>
      )}
    </>
  );
};

export default ProfileData;
