import { Step, StepLabel, Stepper } from '@mui/material';
import React, { useCallback, useRef, useState } from 'react';
import StepIcon from '../StepIcon';
import * as S from './style';

export const Steps: React.FC = () => {

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

  const isActiveStep = (currentStep: number, currentPage: number ) => {

    if(currentPage && currentStep) return true
    return false
  }

  return (
    <S.Container>
      <p>dsji</p>



      <Stepper activeStep={activeStep} connector={<S.ColorlibConnector />}>
        {steps.map((label, index) => {
    


          return (
            <Step key={label}
              className={activeStep === index ? "step activeStep" : "step"}
            >
              <StepLabel StepIconComponent={StepIcon}>
                <StepIcon 
                  value={index as any} 
                  label={label} 
                  active={isActiveStep(activeStep, index)}
                  />
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>

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
