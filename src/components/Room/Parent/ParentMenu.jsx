// import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import ParentCreateTask from "Components/Room/Parent/ParentCreateTask.jsx";

// export class ParentMenu extends Component {
//   static propTypes = {
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       seen: false,
//     };
//   }

//   togglePop = () => {
//     this.setState({
//       seen: !this.state.seen,
//     });
//   };

//   render() {
//     return (
//       <div className="ParentMenu d-flex">
//         <h1>
//           <span
//             className="ClickToCreate"
//             onClick={this.togglePop}
//             style={{
//               color: "white",
//               background: "black",
//               paddingLeft: "0.5rem",
//               paddingRight: "0.5rem",
//             }}
//           >
//             Create a New Task
//           </span>
//         </h1>
//         {this.state.seen ? <ParentCreateTask toggle={this.togglePop} /> : null}
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(ParentMenu);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class ParentMenu extends Component {
  static propTypes = {};

  render() {
    return <div className="ParentMenu"></div>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ParentMenu);
