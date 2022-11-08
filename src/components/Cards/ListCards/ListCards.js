import Card from '../Card/Card';

const ListCards = ({ data }) => {
  return (
    <>
      {data.map((card) => (
        <Card key={card.id} icon={card.icon} title={card.title} text={card.text} />
      ))}
    </>
  );
};

export default ListCards;
