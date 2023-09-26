import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 70px) repeat(2, 80px) 1fr;
  align-items: center;
  /* justify-content: space-between; */
  gap: 16px;
  @media (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 75px) 1fr;
  }
  @media (max-width: 641px) {
    grid-template-columns: 1fr;
  }
  .disable-label {
    cursor: not-allowed;
  }
  .dropdown-container {
    margin-left: auto;
    @media (max-width: 641px) {
      margin: unset;
    }
  }
  & label {
    display: flex;
    gap: 10px;

    &,
    input {
      cursor: pointer;
      &:disabled {
        cursor: not-allowed;
      }
    }
  }
  .env-dropdown .dropdown-control {
    min-width: 165px;
  }
  .env-dark-theme-tooltip,
  .env-white-theme-tooltip {
    font-weight: 600;
  }
  .env-dark-theme-tooltip {
    background-color: #444c56;
    color: inherit;
    border: 1px solid rgba(205, 217, 299, 0.1);
    & .react-tooltip-arrow {
      border-right: 1px solid rgba(205, 217, 299, 0.1);
      border-bottom: 1px solid rgba(205, 217, 299, 0.1);
    }
  }
`;
