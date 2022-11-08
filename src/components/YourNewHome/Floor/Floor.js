import ListOfRooms from '../ListOfRooms/ListOfRooms';
import { Wrapper, WrapperImage, WrapperFloorData } from './style';

const Floor = ({ floorPlan, nameOfFloor, rooms, sumOfArea }) => {
  return (
    <Wrapper>
      <WrapperImage
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL + `/img/${floorPlan}`})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></WrapperImage>
      <WrapperFloorData>
        <h3>{nameOfFloor}</h3>
        <div>{rooms && <ListOfRooms rooms={rooms} sumOfArea={sumOfArea} />}</div>
      </WrapperFloorData>
    </Wrapper>
  );
};

export default Floor;
