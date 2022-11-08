import { CardWrapper, Icon, IconWrapper, TextWrapper, Title } from './style';

const Card = ({ icon, title, text }) => {
  return (
    <CardWrapper>
      <IconWrapper>
        <Icon icon={icon} />
      </IconWrapper>
      <TextWrapper>
        <Title>{title}</Title>
        <p>{text}</p>
      </TextWrapper>
    </CardWrapper>
  );
};

export default Card;
