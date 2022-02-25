import { makeStyles } from '@mui/styles';
import { ITextareaProps } from './Textarea.types';

export const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    opacity: (props: ITextareaProps) => props.disabled ? 0.5 : 1,
  },
  textarea: {
    position: 'relative',
    display: 'inline-block',
    width: '100%',
    height: 'auto',
    minHeight: '10rem',
    padding: '1.5rem',
    fontWeight: '500',
    fontFamily: 'Manrope',
    fontSize: '0.875rem',
    lineHeight: '160%',
    color: '#111c24',
    letterSpacing: '0.01em',
    border: (props: ITextareaProps) => props.isFocused ? "1px solid #0374DD" : "1px solid #DDE1E3",
    outline: 'unset',
    borderRadius: '0.27rem',
    backgroundColor: '#ffffff'
  },
}));