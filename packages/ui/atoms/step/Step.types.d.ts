export enum stepType {
  CURRENT = 'CURRENT',
  DONE = 'DONE',
  NOT_DONE = 'NOT_DONE'
}

export interface IStepProps {
  variant: stepType;
  stepIndex: number;
}
