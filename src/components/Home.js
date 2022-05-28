// import React from "react";

// function Home({name, city, textColor}) {
//   return (
//     <div id="home">
//       <h1 style={{ color: {textColor} }}>
//         {name} is a Web Developer from {city}
//       </h1>
//     </div>
//   );
// }

// export default Home;


import React from "react";

let txtClr 

function Home(props) {
  console.log(props.textColor)
  txtClr = props.textColor
  console.log(txtClr)

  return (
    <div id="home">
      <h1 style = { {color: props.textColor} }>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
