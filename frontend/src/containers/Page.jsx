import React from "react";

class Page extends React.Component {
  render() {
    return (
      <div>
        {this.props.currentText}
        {this.props.children}
      </div>
    );
  }
}

export default Page;
