import styled from '@emotion/styled'

interface StyledButtonProps {
  disabled: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: fit-content;
  outline: none;
  border: none;
  padding: 20px;
  /* background: #1f27f5; */
  background: ${({ disabled }) => disabled ? "grey" : '#1f27f5'};
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
`

/* .button:disabled {
  background-color: grey;
  cursor: auto;
} */
