import { FC } from 'react';

// styles
import { IPillProps } from './Pill.types';
import { useStyles } from './Pill.styles';

const Pill: FC<IPillProps> = ({ variant = 'NOT_DONE', stepIndex = 1, icon, title }) => {
  const classes = useStyles({ variant });

  return (
    <div className={classes.container}>
      <div className={classes.circle}>
        {icon ? icon : stepIndex}
      </div>
      <p className={classes.label}>{title}</p>
    </div>
  );
};

export { Pill };
