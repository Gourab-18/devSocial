import React from "react";
import { useState, useEffect } from "react";

import ProfileData from "./ProfileData";
import Followers from "./Followers";

const Search = () => {
  const [name, setName] = useState("Gourab-18");
  const [toggle, setToggle] = useState(0);
  const [info, setInfo] = useState({});
  const [rateData, setRateData] = useState(0);
  const [followers, setFollowers] = useState([]);
  const baseUrl = "https://api.github.com/";
  const searchDevs = (e) => {
    setName(e.target.value);
    // console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    callApi(name);
  };

  const callApi = (name) => {
    // console.log(name);
    setToggle(!toggle);
  };
  const fetchData = async (name) => {
    // console.log(name);
    const url = baseUrl + "users/" + name;
    // console.object(url);

    try {
      const value = await fetch(url);

      const data = await value.json();

      // console.log(data);
      setInfo(data);
    } catch (e) {
      console.log(e);
    }
    callFollowers(url);
    checkRequests();
  };

  // calling followers
  const callFollowers = async (url) => {
    url = url + "/" + "followers";

    try {
      const value = await fetch(url);

      const data = await value.json();

      console.log(data);
      setFollowers(data);
      // console.log(followers);
    } catch (e) {
      console.log(e);
    }
  };
  const checkRequests = async () => {
    const url = baseUrl + "rate_limit";

    try {
      const value = await fetch(url);

      const data = await value.json();

      setRateData(data.rate);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData(name);
  }, [toggle]);
  return (
    <>
      <form onSubmit={handleSubmit} className="flex justify-center mt-10">
        <input
          className="shadow appearance-none border rounded w-1/3 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={name}
          onChange={(e) => searchDevs(e)}
          placeholder="Search Devs"
        />
        <p></p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 ml-2 rounded"
          type="submit"
        >
          Search
        </button>
        <span className="font-mono text-3xl text-sky-800 text-center  ml-6">
          {" "}
          Requests:{rateData.remaining}/{rateData.limit}{" "}
        </span>
      </form>

      <ProfileData
        info={info}
        rateData={rateData}
        followingPeople={followers}
      />
      {/* <Followers followers={followers} /> */}
    </>
  );
};

export default Search;
