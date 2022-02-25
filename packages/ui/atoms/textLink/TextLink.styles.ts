import { makeStyles } from '@mui/styles';

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
    lineHeight: '19px',
    color: '#005EBE',
    letterSpacing: '0.01em',
    textDecoration: 'unset'
  }
}));