// import React from "react";
// import NavBar from "./NavBar";
// import Home from "./Home";
// import About from "./About";

// // pass this data down as props to the child component(s) that need it!
// import user from "../data/user";
// // console.log(user);
// // console.log(user.links);
// // console.log(user.links.github);
// // console.log(user.links.linkedin);


// function App() {
//   return (
//     <div>
//       <NavBar />
//       <Home 
//       textColor = {user.color}
//       name = {user.name}
//       city = {user.city}
//       />
//       <About bio = {user.bio} userGitLink = {user.links.github} userLinkedLink = {user.links.linkedin}/>
//     </div>
//   );
// }

// export default App;


import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
// console.log(user);



function App() {
  return (
    <div>
      <NavBar />
      <Home 
      textColor = {user.color}
      name = {user.name}
      city = {user.city}
      />
      {/* <About bio = {user.bio} userGitLink = {user.links.github} userLinkedLink = {user.links.linkedin}/> */}
      <About bio = {user.bio} gitLinks = {user.links.github} linkedLinks = {user.links.linkedin}/>
    </div>
  );
}

// export {gitLinkData, linkedLinkData}
export default App;