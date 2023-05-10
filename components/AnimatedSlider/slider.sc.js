import styled from "styled-components";

export const ProjectWrapper = styled.div`
  margin: 5em 0;
  border:1px solid red;

  @media screen and (max-width: 450px) {
    margin: 3em 0;
  }
`;

export const ProjectCover = styled.div`
  position: relative;
  overflow: hidden;
  border:1px solid blue;

  img {
    width: 100%;
  }

  .project-cover-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: #fff;
    transform-origin: left;
    z-index: 2;
  }
`;

// export const ProjectDescription = styled.div`
//   padding: 0 2rem;

//   @media screen and (max-width: 450px) {
//     padding: 0;
//   }
// `;

// export const ProjectHeading = styled.div`
//   margin-bottom: 1rem;
//   position: relative;
//   overflow: hidden;

//   .project-heading-inner h1 {
//     font-family: "Abril Fatface", serif;
//     font-size: 200%;
//     color: #303030;

//     @media screen and (max-width: 600px) {
//       font-size: 130%;
//     }
//   }
// `;

// export const ProjectText = styled.div`
//   position: relative;
//   overflow: hidden;

//   .project-text-inner p, .project-text-inner ul {
//     line-height: 1.6;
//     color: rgba(0, 0, 0, 0.6);
//     font-size: 1rem;
//     font-family: "Alegreya", sans-serif;
//   }
// `;

// export const ProjectLinks = styled.div`
//   width: 100%;
//   margin: 2rem 0;
//   display: flex;
// `;

// export const ProjectLink = styled.div`
//   margin-right: 20px;
//   position: relative;
//   overflow: hidden;

//   .project-link-inner a {
//     color: #303030;
//     text-decoration: underline;
//   }
// `;
