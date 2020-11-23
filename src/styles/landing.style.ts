import styled from "styled-components";

import landImage from './../images/landpage.svg';

export const LandingStyle = styled.div`
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-wrapper {
    position: relative;

    width: 100%;
    max-width: 1100px; 

    height: 100%;
    max-height: 680px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;

    background: url(${landImage}) no-repeat 80% center;

    main {
      max-width: 350px;

      h1 {
        font-size: 76px;
        font-weight: 900;
        line-height: 0.9;
        margin-bottom: 5px;
      }
    }

    .location {
      position: absolute;
      top: 0px;
      right: 0px;

      font-size: 24px;
      line-height: 34px;
       
      display: flex;
      flex-direction: column;

      text-align: right;

      strong {
        font-weight: 800;
      }
    }



    .enter-app {
      position: absolute;
      bottom: 0px;
      right: 0px;

      width: 80px;
      height: 80px;
      background: #ffd666;
      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.2s;

      &:hover {
        background: #96FEFF;
        transition: 0.2s;
      }
    }
  }
`;
