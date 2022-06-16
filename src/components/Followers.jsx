import React from "react";
import styled from "styled-components";
import Follower from "./Follower";
const Followers = ({ followers }) => {
  return (
    <>
      <Container>
        <div className="bg-white border-gray-200">
          {followers &&
            followers.map((follower) => {
              const { node_id } = follower;
              return (
                <article key={node_id}>
                  <Follower follower={follower} />
                </article>
              );
            })}
        </div>
      </Container>
    </>
  );
};

export default Followers;

const Container = styled.div`
  height: 50vh;
  width: 40vw;
  overflow: scroll;
`;
