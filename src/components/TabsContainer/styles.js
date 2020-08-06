import styled from 'styled-components';

export const TabsContainer = styled.div`
  grid-area: tabscontainer;
  height: 100%;
  background: ${({ theme }) => theme.bodyPrimaryInactive};
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.comment};
  }
`;
export const TabsFlexContainer = styled.div`
  display: flex;
`;

export const TabsInnerContainer = styled.div`
  background: ${({ theme, file, focusedFile }) =>
    (focusedFile === file && theme.bodyPrimary) ||
    (focusedFile !== file && theme.bodyPrimaryInactive)};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1px;
  padding: 8px 15px;
  border-bottom: 1px solid
    ${({ theme, file, focusedFile }) =>
      (focusedFile === file && theme.path) || (focusedFile !== file && 'none')};
`;
