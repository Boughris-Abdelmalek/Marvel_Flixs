import styled from "styled-components";

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 26px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding-bottom: 0.4375rem;
  padding-left: 1.75rem;
  &:focus {
    outline: 2px solid #c6a972;
    outline-offset: 4px;
  }
  &::placeholder {
    color: grey;
  }
`;
