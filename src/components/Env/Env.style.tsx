import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  gap: 16px;
  .disable-label {
    cursor: not-allowed;
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
    border: 1px solid rgba(205,217,299,0.1);
    & .react-tooltip-arrow {
      border-right: 1px solid rgba(205,217,299,0.1);
      border-bottom: 1px solid rgba(205,217,299,0.1);
    }
  }
`;
