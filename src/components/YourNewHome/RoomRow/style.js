import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ bold = true }) => (bold ? '600' : '400')};
  transition: 0.4s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledTitle = styled.p`
  text-transform: uppercase;
`;
