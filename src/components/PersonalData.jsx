import React from "react";
import Followers from "./Followers";
const PersonalData = ({ info, followingPeople }) => {
  const { name, company, location, twitter_username, html_url, bio } = info;
  return (
    <>
      <div className="flex justify-around">
        <div className=" w-2/5 flex flex-col bg-white border-gray-200 ">
          <div className="flex justify-around mt-8">
            <div className="flex ">
              <div>
                <img
                  className="object-contain h-20 w-20 rounded-full"
                  alt="img"
                  src={info.avatar_url}
                />
              </div>

              <div className="flex justify-center flex-col ml-4 ">
                <p className="font-bold ml-1"> {name}</p>
                <p>@{twitter_username}</p>
              </div>
            </div>
            <button
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-0 w-20 h-10 justify-center mt-4"
              type="submit"
            >
              <a href={html_url} target="_blank" rel="noreferrer">
                Follow
              </a>
            </button>
          </div>
          <div className="ml-16">
            <p className="mt-4">{bio}</p>

            <p>Location: {location}</p>
            <p>Company:{company}</p>
          </div>
        </div>
        <div>
          <Followers followers={followingPeople} />
        </div>
      </div>
    </>
  );
};

export default PersonalData;
