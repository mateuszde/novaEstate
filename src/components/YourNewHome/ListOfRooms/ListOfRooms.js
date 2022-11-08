import Room from '../Room/Room';
import RoomRow from '../RoomRow/RoomRow';

const ListOfRooms = ({ rooms, sumOfArea }) => {
  return (
    <>
      {rooms.map((room, index) => (
        <Room key={index} nameOfRoom={room.nameOfRoom} area={room.area} />
      ))}
      <RoomRow title="Suma powierzchni" valueOfData={sumOfArea} unit="m2" bold={true} />
    </>
  );
};

export default ListOfRooms;
