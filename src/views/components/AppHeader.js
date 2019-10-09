import styled from 'styled-components';

const AppHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.typography.fontFamily};

  p {
    margin: 24px 0;
  }

  code {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default AppHeader;
