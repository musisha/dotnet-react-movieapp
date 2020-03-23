import * as React from "react";
import "./MovieInfoBar.css";
import FontAwesome from "react-fontawesome";
import { calcTime, convertMoney } from "../../../helpers";

interface IProps {
  revenue: number;
  budget: number;
  time: number;
}

export const MovieInfoBar: React.FC<IProps> = (props: IProps) => (
  <div className="rmdb-movieinfobar">
    <div className="rmdb-movieinfobar-content">
      <div className="rmdb-movieinfobar-content-col">
        <FontAwesome className="fa-time" name="clock-o" size="2x" />
        <span className="rmdb-movieinfobar-info">
          Running time: {calcTime(props.time)}
        </span>
      </div>
      <div className="rmdb-movieinfobar-content-col">
        <FontAwesome className="fa-budget" name="money" size="2x" />
        <span className="rmdb-movieinforbar-info">
          Budget: {convertMoney(props.budget)}
        </span>
      </div>
      <div className="rmdb-movieinfobar-content-col">
        <FontAwesome className="fa-revenue" name="ticket" size="2x" />
        <span className="rmdb-movieinfobar-col">
          Revenue:{convertMoney(props.revenue)}
        </span>
      </div>
    </div>
  </div>
);
