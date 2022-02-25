import styled from 'styled-components';
import { stepType } from './Step.types';

export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StepCircle = styled.div<{
  variant: stepType
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  margin-right: 12px;

  background: ${({ variant }) => variant === 'CURRENT' ? '#DD0374' : variant === 'DONE' ? '#111C24' : '#E3EBF4'};
  color: ${({ variant }) => variant === 'CURRENT' || variant === 'DONE' ? '#FFFFFF' : '#637888'};
`;

export const StepLabel = styled.p<{
  variant: stepType
}>`
  font-weight: 700;
  font-family: Manrope;
  font-size: 14px;
  line-height: 19.12px;
  color: ${({ variant }) => variant === 'CURRENT' ? '#DD0374' : variant === 'DONE' ? '#111C24' : '#637888'};
`;
