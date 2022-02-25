export enum btnType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  SUCCESS = 'success',
  DANGER = 'danger',
  LIGHT = 'light',
  DEFAULT = 'default',
}

export interface IButtonProps {
  variant?: btnType;
  onClick?: (...args) => any;
}
