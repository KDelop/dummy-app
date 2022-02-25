import { FC } from 'react';

// styles
import { useStyles } from './Avatar.styles';
import { IAvatarProps } from './Avatar.types';

const Avatar: FC<IAvatarProps> = ({ source, shape = 'SQUARE' }) => {
  const classes = useStyles({ shape });

  return (
    <div className={classes.container}>
      <img src={source} className={classes.avatar}></img>
    </div>
  );
};

export { Avatar };
