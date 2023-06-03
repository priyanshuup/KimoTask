import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  width:100vw;
  display:flex;
  align-items: center;
  justify-content:space-between;
  padding: 0 2vw

  li {
    padding: 18px 10px;
  }

  .middlecontent{
    width:25vw;
    display:flex;
    align-items:center;
    font-family: monospace;
    font-size:2vh;
    font-weight:100;
    justify-content:space-around;
  }
  button{
    padding: 1vh 2vh;
  border-radius: 5px;
  border: 2px solid #008080;
  color: #fff;
  font-weight: 600;
  }
  @media (max-width: 768px) {
    background-color: #fff;
    position: fixed;
    flex-direction:column;
    align-items:flex-start;
    justify-content:space-around;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    transition: transform 0.3s ease-in-out;

    li {
      color: #000;
      font-size:3vh
    }
    .middlecontent{
      height:50vh;
      flex-direction:column;
      align-items:flex-start;
    }
    button{
      font-size:3vh;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <>
      <Ul open={open}>
        <div className="middlecontent">
          <li>Home</li>
          <li>Surfing</li>
          <li>Hula</li>
          <li>Volcano</li>
        </div>
        <button>Book a trip</button>
      </Ul>
    </>
  );
};

export default RightNav;
