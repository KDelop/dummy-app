export enum pillType {
  CURRENT = 'CURRENT',
  DONE = 'DONE',
  NOT_DONE = 'NOT_DONE',
  SUCCESS = 'SUCCESS'
}

export interface IPillProps {
  variant: pillType;
  stepIndex: number;
  title: string;
  icon?: React.ReactNode | React.ReactNode[];
}
