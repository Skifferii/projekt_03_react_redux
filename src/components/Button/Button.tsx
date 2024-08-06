import { StyledButton } from './styles'
import { ButtonProps } from "./types";

function Button({ name, type = "button", onClick, disabled = false }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick} disabled={disabled}>
      {name}
    </StyledButton>
  );
}

export default Button;
