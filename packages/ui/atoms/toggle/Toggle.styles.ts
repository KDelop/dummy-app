import { makeStyles } from '@mui/styles';
import { IToggleProps } from './Toggle.types';

export const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    fontWeight: '600',
    fontFamily: 'Manrope',
    fontSize: '14px',
    lineHeight: '19.12px',
    color: '#111c24',
    order: (props: IToggleProps) => props.labelPosition === 'left' ? 0 : 1,
    paddingLeft: (props: IToggleProps) => props.labelPosition === 'left' ? 0 : 12,
    paddingRight: (props: IToggleProps) => props.labelPosition === 'right' ? 0 : 12,
  },
  switch: {
    position: 'relative',
    display: 'inline-block',
    width: 40,
    height: 20,
    '& input': {
      opacity: 0,
      width: 0,
      height: 0,
    },
    order: (props: IToggleProps) => props.labelPosition === 'left' ? 1 : 0,
  },
  slider: {
    position: 'absolute',
    cursor: 'pointer',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: (props: IToggleProps) => props.checked ? '#0374DD' : '#9BAAB6',
    borderRadius: 34,
    // '&:-webkit-transition': {
    //   transition: '0.4s'
    // },
    WebkitTransition: '0.4s',
    transition: '0.4s',
    '&:before': {
      position: 'absolute',
      content: "''",
      height: 16,
      width: 16,
      left: 2,
      bottom: 2,
      backgroundColor: "white",
      WebkitTransition: '0.4s',
      transition: '0.4s',
      borderRadius: '50%',
      transform: (props: IToggleProps) => props.checked ? 'translateX(20px)' : 'translateX(0px)',
      WebkitTransform: (props: IToggleProps) => props.checked ? 'translateX(20px)' : 'translateX(0px)',
      msTransform: (props: IToggleProps) => props.checked ? 'translateX(20px)' : 'translateX(0px)',
    },
  },
}));