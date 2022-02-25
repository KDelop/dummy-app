export enum AvatarShape {
  SQUARE = 'SQUARE',
  CIRCLE = 'CIRCLE'
}

export interface IAvatarProps {
  source: string;
  shape: AvatarShape;
}
