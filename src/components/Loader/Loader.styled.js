import styled from 'styled-components';

export const LoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 500ms linear, visibility 500ms linear;
`;

export const Spinner = styled.div`
  position: absolute;
  top: calc(50% - 60px);
  left: calc(50% - 60px);
  width: 120px;
  border: 16px solid #3f51b5;
  border-top: 16px solid rgba(174, 175, 165, 1);
  border-radius: 50%;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
