import React from "react";
import "../App.css";

const areEqual = (preProps, nextProps) => true;

const PageLayout = React.memo(props => {
  return (
    <div class="page-layout">
      <div>{props.children}</div>
    </div>
  );
}, areEqual);
export default PageLayout;
