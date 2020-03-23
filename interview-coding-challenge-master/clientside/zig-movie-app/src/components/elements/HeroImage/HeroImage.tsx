import * as React from "react";
import "./HeroImage.css";
// import Description from "../../../Description";
import { IHeroProps } from "./IHeroImage";

export const HeroImage: React.FC<IHeroProps> = (props: IHeroProps) => {
  return (
    <div
      className="rmdb-heroimage"
      style={{
        background: `linear-gradient(to bottom, rgba(0,0,0,0)
            39%, rgba(0,0,0,0)
            41%,rgba(0,0,0,0.65)
            100%),url('${props.heroimage}'), #1c1c1c`
      }}
    >
      <div className="rmdb-heroimage-content">
        <div className="rmdb-heroimage-text">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};
