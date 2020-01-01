import React from "react";
import "../App.css";

const RoadListItem = props => {
  return (
    <>
      <div class="RoadList-grid-item RoadList-grid-item-left">
        {props.road.name}
      </div>

      <div class="RoadList-grid-item RoadList-grid-item-center">
        {props.road.state}
      </div>

      <div
        class="RoadList-grid-item RoadList-grid-item-right"
        onClick={props.onVote}
      >
        {props.road.votes}
      </div>
    </>
  );
};
export default RoadListItem;
