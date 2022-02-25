import { FC } from 'react';

// styles
import { IStepProps } from './Step.types';
import * as styled from './Step.styles';

const Step: FC<IStepProps> = ({ variant = 'NOT_DONE', stepIndex = 1 }) => {
  return (
    <styled.StepContainer>
      <styled.StepCircle variant={variant}>{stepIndex}</styled.StepCircle>
      <styled.StepLabel variant={variant}>Step</styled.StepLabel>
    </styled.StepContainer>
  );
};

export { Step };
