import React from "react";
import "./index.less";

class Index extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <svg width="100%" height="100">
            <text text-anchor="middle" x="50%" y="50%" class="text text-1">
              This is a new start
            </text>
            <text text-anchor="middle" x="50%" y="50%" class="text text-2">
              This is a new start
            </text>
            <text text-anchor="middle" x="50%" y="50%" class="text text-3">
              This is a new start
            </text>
            <text text-anchor="middle" x="50%" y="50%" class="text text-4">
              This is a new start
            </text>
          </svg>
        </div>
      </div>
    );
  }
}
export default Index;
