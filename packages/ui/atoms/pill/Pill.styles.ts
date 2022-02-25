import { makeStyles } from '@mui/styles';
import { IPillProps } from './Pill.types';

function backgroundColor(type) {
  switch (type) {
    case 'CURRENT':
      return '#DD0374';
    case 'DONE':
      return '#111C24';
    case 'SUCCESS':
      return '#16782E';
    default:
      return '#E3EBF4';
  }
};

function circleTextColor(type) {
  switch (type) {
    case 'CURRENT':
      return '#FFFFFF';
    case 'DONE':
      return '#FFFFFF';
    case 'SUCCESS':
      return '#FFFFFF';
    default:
      return '#637888';
  }
};

function labelTextColor(type) {
  switch (type) {
    case 'CURRENT':
      return '#DD0374';
    case 'DONE':
      return '#111C24';
    case 'SUCCESS':
      return '#16782E';
    default:
      return '#637888';
  }
};

export const useStyles = makeStyles(({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  circle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    lineHeight: '22px',
    marginRight: '12px',
    background: (props: IPillProps) => backgroundColor(props.variant),
    color: (props: IPillProps) => circleTextColor(props.variant)
  },
  label: {
    fontWeight: '700',
    fontFamily: 'Manrope',
    fontSize: '14px',
    lineHeight: '19.12px',
    color: (props: IPillProps) => labelTextColor(props.variant)
  }
}));