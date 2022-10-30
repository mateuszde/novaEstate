import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  gap: 40px;
  margin: 40px auto;
  color: ${({ theme }) => theme.colors.black};
`;
