import { makeStyles } from '@mui/styles';
import { IAvatarProps } from './Avatar.types';

export const useStyles = makeStyles(({
  container: {
    width: 48,
    height: 48,
    borderRadius: (props: IAvatarProps) => props.shape == 'SQUARE' ? 4 : '50%',
    flex: 'none',
    order: 0,
    margin: '0px 12px',
    flexGrow: 0,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));