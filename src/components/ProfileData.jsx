import React from "react";
import IndivisualData from "./IndivisualData";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import PersonalData from "./PersonalData";
const ProfileData = ({ info, followingPeople }) => {
  const {
    followers,
    following,
    public_repos,

    public_gists,
  } = info;

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
