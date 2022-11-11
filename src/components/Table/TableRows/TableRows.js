import TableRow from '../TableRow/TableRow';

const TableRows = ({ data }) => {
  return (
    <>
      {data.map((el) => (
        <TableRow
          key={el.id}
          number={el.number}
          area={el.area}
          landArea={el.landArea}
          availability={el.availability}
          price={el.price}
        />
      ))}
    </>
  );
};

export default TableRows;
