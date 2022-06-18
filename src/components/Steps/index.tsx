import { Step, StepLabel, Stepper } from '@mui/material';
import React, { ReactNode, useCallback, useRef, useState } from 'react';
import StepIcon from '../StepIcon';
import * as S from './style';

interface StepsProps {
  children: ReactNode
}
export const Steps: React.FC<StepsProps> = ({ children }: StepsProps) => {

  const steps = ['user', 'documents', 'transport', 'buy', 'set'];

  const [activeStep, setActiveStep] = useState(0);


  const prevBtn = useRef<HTMLButtonElement>(null);
  const nextBtn = useRef<HTMLButtonElement>(null);

  const navigatePage = (currentPage: number, type: string) => {

    if(type === 'previous'){

      if (currentPage > 0) return setActiveStep(prev => prev - 1);
      else return prevBtn.current?.disabled === true
    }
    if(type === 'next'){

      if (currentPage <= 4) return setActiveStep(prev => prev + 1);
      else return nextBtn.current?.disabled === true
    }

  }

  console.log(activeStep)

  const completedStep = (currentStep: number, keyStep: number) => {

    if(keyStep < currentStep) return true
    return false
  }

  return (
    <S.Container>

      <Stepper activeStep={activeStep} >
        {steps.map((label, index) => {
          
          let completed = completedStep(activeStep, index)
          return (
            <Step key={label}
              className={activeStep >= index ? "step activeStep" : "step"}
            >
              <StepLabel StepIconComponent={StepIcon}>
                <StepIcon 
                label={label}
                value={index as any}
                status={completed} 
                 // active={isActiveStep(activeStep, index)}
                  />
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      { children }
      <S.NavigationStep>
        <button
          onClick={() => navigatePage(activeStep, "previous")}
        >Previous</button>
        <button 
          onClick={() => navigatePage(activeStep, "next")}
        >Next</button>
      </S.NavigationStep>
    </S.Container>
  );
}
