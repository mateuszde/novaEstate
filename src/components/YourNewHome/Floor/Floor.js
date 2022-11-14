import ListOfRooms from '../ListOfRooms/ListOfRooms';
import { Wrapper, StyledImage, WrapperImage, WrapperFloorData } from './style';

const Floor = ({ floorPlan, nameOfFloor, rooms, sumOfArea }) => {
  return (
    <Wrapper>
      <WrapperImage>
        <StyledImage src={floorPlan} alt="" />
      </WrapperImage>
      <WrapperFloorData>
        <h3>{nameOfFloor}</h3>
        <div>{rooms && <ListOfRooms rooms={rooms} sumOfArea={sumOfArea} />}</div>
      </WrapperFloorData>
    </Wrapper>
  );
};

export default Floor;
