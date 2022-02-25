import { FC, useState } from 'react';

// styles
import { useStyles } from './Toggle.styles';
import { IToggleProps } from './Toggle.types';

const Toggle: FC<IToggleProps> = ({ labelPosition, checked = false, onChange, ...props }) => {

  const [isChecked, setIsChecked] = useState(checked);
  const classes = useStyles({ labelPosition, checked: isChecked });

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  }

  return (
    <div className={classes.container}>
      {
        typeof props.children === 'string' ?
          <p className={classes.label}>{props.children}</p>
          :
          <div className={classes.label}>{props.children}</div>
      }
      <label className={classes.switch}>
        <input type="checkbox" checked={isChecked} onChange={handleChange}></input>
        <span className={classes.slider}></span>
      </label>
    </div>
  );
};

export { Toggle };
