import { ReactPropTypes } from "react";

export enum positionType {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface IToggleProps {
  labelPosition: positionType;
  checked: boolean,
  onChange?: (checked) => boolean;
}
