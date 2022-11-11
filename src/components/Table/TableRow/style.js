import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ bold = true }) => (bold ? '600' : '400')};
  transition: 0.4s ease;

  background-color: ${({ bold = true, theme }) => (bold ? theme.colors.lightGray : '')};

  /* & > div {
    padding: 10px 0;
  } */
  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const NumberWrapper = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const AreaWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const LandAreaWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const AvailabilityWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 200px;
  justify-content: center;
`;
