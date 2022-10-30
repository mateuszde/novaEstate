import Card from '../Card/Card';

const ListCards = ({ data }) => {
  return (
    <>
      {data.map((card) => (
        <Card icon={card.icon} title={card.title} text={card.text} />
      ))}
    </>
  );
};

export default ListCards;
