// import React from "react";

// function Links({gitData, linkedInData}) {

//   return (
//     <React.Fragment>
//       <h3>Links</h3>
//       <a href={gitData}>{gitData}</a>
//       <a href={linkedInData}>{linkedInData}</a>
//     </React.Fragment>
//   );
// }

// export default Links;

import React from "react";

function Links(props) {
  // console.log(props)

  return (
    <React.Fragment>
      <h3>Links</h3>
      {/* <a href={props.gitData}>{props.gitData}</a>
      <a href={props.linkedInData}>{props.linkedInData}</a> */}
      <a href={props.github}>{props.github}</a>
      <a href={props.linkedin}>{props.linkedin}</a>
    </React.Fragment>
  );
}

export default Links;