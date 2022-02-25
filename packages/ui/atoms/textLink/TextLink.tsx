import { FC } from 'react';

// styles
import { useStyles } from './TextLink.styles';
import { ITextLinkProps } from './TextLink.types';

const TextLink: FC<ITextLinkProps> = ({ text, link = "#" }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <a className={classes.label} href={link} target={"_blank"}>{text}</a>
    </div>
  );
};

export { TextLink };
