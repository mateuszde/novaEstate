import {
  faBriefcase,
  faEnvelope,
  faMapLocationDot,
  faMobileScreen,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { forwardRef } from 'react';
import {
  Wrapper,
  Title,
  Icon,
  ContactWrapper,
  ContactElementWrapper,
  PersonImageWrapper,
  InvestmentAddressWrapper,
  StyledImg,
} from './style';
import image from '../../images/michalMaciejewski.png';

const Contact = forwardRef(({ data }, ref) => {
  return (
    <Wrapper ref={ref}>
      <ContactWrapper>
        <Title>Skontaktuj się!</Title>
        <ContactElementWrapper>
          <Icon icon={faUser} />
          <p>
            {data.firstName} {data.lastName}
          </p>
        </ContactElementWrapper>
        <ContactElementWrapper>
          <Icon icon={faBriefcase} />
          <p>{data.jobPosition}</p>
        </ContactElementWrapper>
        <ContactElementWrapper>
          <Icon icon={faMobileScreen} />
          <p>{data.mobile}</p>
        </ContactElementWrapper>
        <ContactElementWrapper>
          <Icon icon={faEnvelope} />
          <p>{data.mail}</p>
        </ContactElementWrapper>
        <ContactElementWrapper>
          <Icon icon={faMapLocationDot} />
          <InvestmentAddressWrapper>
            <p>Adres inwestycji:</p>
            <p>{data.investmentAddress}</p>
          </InvestmentAddressWrapper>
        </ContactElementWrapper>
      </ContactWrapper>

      <PersonImageWrapper>
        <StyledImg src={image} alt="" />
      </PersonImageWrapper>
    </Wrapper>
  );
});

export default Contact;
