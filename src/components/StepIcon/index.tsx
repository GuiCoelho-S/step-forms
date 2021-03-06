import React from 'react';
import { AiOutlineUserAdd, AiFillCar, AiOutlineShoppingCart, AiOutlineCaretRight, AiFillCheckCircle } from 'react-icons/ai';
import { IoDocumentSharp } from 'react-icons/io5';

import * as S from './style';

const Icons = {
  0: <AiOutlineUserAdd />,
  1: <IoDocumentSharp />,
  2: <AiFillCar />,
  3: <AiOutlineShoppingCart />,
  4: <AiOutlineCaretRight/>
}

interface IStepIcons{
  value: keyof typeof Icons;
  label: string;
  status: boolean;
  //active: boolean;
}

const StepIcon: React.FC<IStepIcons> = ({ value, label, status }: IStepIcons) => {

  return (
    <S.Container>
      { status ? (<AiFillCheckCircle />) : (<>{Icons[value]}</>) }
      <p>{label}</p>
    </S.Container>
  );
}

export default StepIcon;