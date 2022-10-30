import { CardWrapper, IconWrapper, TextWrapper, Title } from './style';

const Card = ({ icon, title, text }) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <p>{icon}</p>
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <p>{text}</p>
      </TextWrapper>
    </CardWrapper>
  );
};

export default Card;
