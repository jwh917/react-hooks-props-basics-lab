// import React from "react";
// import Links from "./Links";


// function About({bio , userGitLink, userLinkedLink}) {
//   // console.log(bio)
//   // console.log(userGitLink)
//   // console.log(userLinkedLink)
//   // console.log(userLinks.linkedin)


//   return (
//     <div id="about">
//       <h2>About Me</h2>
//       {bio ? <p>{bio}</p> : null}
//       <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
//       {/* add your <Links /> component here */}
//       <Links gitData = {userGitLink} linkedInData = {userLinkedLink}/>
//     </div>
//   );
// }

// export default About;


import React from "react";
import Links from "./Links";


function About(props) {
  // console.log(props)
  // console.log(userGitLink)
  // console.log(userLinkedLink)
  // console.log(userLinks.linkedin)


  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio ? <p>{props.bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      {/* <Links gitData = {props.userGitLink} linkedInData = {props.userLinkedLink}/> */}
      <Links github = {props.gitLinks} linkedin = {props.linkedLinks}/>
    </div>
  );
}

export default About;