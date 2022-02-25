import { FC, useState } from 'react';

// styles
import { useStyles } from './Textarea.styles';
import { ITextareaProps } from './Textarea.types';

const Textarea: FC<ITextareaProps> = ({ value, placeholder, disabled = false, containerStyle = {}, textStyle = {}, onChange }) => {

  const [isFocused, setIsFocused] = useState(false);
  const [_value, setValue] = useState(value);
  const classes = useStyles({ disabled, isFocused });

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <div className={classes.container} style={containerStyle}>
      <textarea
        value={_value}
        placeholder={placeholder || "Enter your notes"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={classes.textarea}
        style={textStyle}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
};

export { Textarea };
