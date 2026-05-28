import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin: 50px auto;
  padding: 24px;
  background: #111827;
  border-radius: 12px;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #374151;
  background: #1f2937;
  color: white;
  margin-top: 6px;

  &:focus {
    outline: none;
    border-color: #60a5fa;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  background: #2563eb;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`;
