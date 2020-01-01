import React from "react";
import "../App.css";

import { RoadListItem } from "./_index";

const RoadList = props => {
  return (
    <>
      <div class="RoadList-grid-container">
        {props.roads.map(road => (
          <RoadListItem
            key={road.id}
            road={road}
            onVote={() => alert("onVote")}
          />
        ))}
      </div>
    </>
  );
};
export default RoadList;
