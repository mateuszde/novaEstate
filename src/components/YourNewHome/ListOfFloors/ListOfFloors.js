import Floor from '../Floor/Floor';

const ListOfFloors = ({ floors }) => {
  return (
    <>
      {floors.map((floor) => (
        <Floor
          key={floor.id}
          nameOfFloor={floor.nameOfFloor}
          rooms={floor.rooms}
          sumOfArea={floor.sumOfArea}
          floorPlan={floor.floorPlan}
        />
      ))}
    </>
  );
};

export default ListOfFloors;
