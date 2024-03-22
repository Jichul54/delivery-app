import * as React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const steps = ['配達物新規登録', '配達物確認', '配達物確定'];
export default function StepperTop({activeStep}) {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((label, index) => {
        const stepProps = {};
        const labelProps = {};
        console.log(label, index);
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}