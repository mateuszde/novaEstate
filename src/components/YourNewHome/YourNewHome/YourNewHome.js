import { forwardRef } from 'react';
import Floors from '../Floors/Floors';
import { floorsData } from '../floorsData';

import { Wrapper, TitleWrapper, FloorsWrapper } from './style';

const YourNewHome = forwardRef(({ title, subTitle }, ref) => {
  return (
    <Wrapper ref={ref}>
      <TitleWrapper>
        <h2>{title} </h2>
        <h3>{subTitle}</h3>
      </TitleWrapper>
      <FloorsWrapper>
        <Floors floors={floorsData} />
      </FloorsWrapper>
    </Wrapper>
  );
});

export default YourNewHome;
