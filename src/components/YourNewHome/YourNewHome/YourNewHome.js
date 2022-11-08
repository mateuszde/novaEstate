import Floors from '../Floors/Floors';
import { floorsData } from '../floorsData';

import { Wrapper, TitleWrapper, FloorsWrapper } from './style';

const YourNewHome = ({ title, subTitle }) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <h2>{title} </h2>
        <h3>{subTitle}</h3>
      </TitleWrapper>
      <FloorsWrapper>
        <Floors floors={floorsData} />
      </FloorsWrapper>
    </Wrapper>
  );
};

export default YourNewHome;
