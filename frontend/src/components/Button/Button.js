import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { Wrapper as Form } from "../Form/Form";
import { COLORS } from "../../styles/constants";

const VARIANTS = {
  default: {
    "--backgroundColor": COLORS.grayLightDim,
    "--textColor": COLORS.text,
    "--padding": "16px 24px",
    "--textDecoration": "none",
  },
  primary: {
    "--backgroundColor": COLORS.primary,
    "--textColor": COLORS.white,
    "--padding": "16px 24px",
    "--textDecoration": "none",
  },
  secondary: {
    "--backgroundColor": COLORS.secondary,
    "--textColor": COLORS.white,
    "--padding": "16px 24px",
    "--textDecoration": "none",
  },
  danger: {
    "--backgroundColor": "transparent",
    "--textColor": COLORS.danger,
    "--padding": "8px 16px",
    "--textDecoration": "underline",
  },
};

const Button = ({ variant, href, children, ...rest }) => {
  const styles = VARIANTS[variant];

  const tag = typeof href === "string" ? Link : "button";

  return (
    <Wrapper as={tag} style={styles} to={href} {...rest}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background-color: var(--backgroundColor);
  color: var(--textColor);
  padding: var(--padding);
  text-transform: uppercase;
  text-decoration: var(--textDecoration);
  border: none;
  font: inherit;

  &:hover {
    opacity: 0.8;
  }

  ${Form} & {
    width: 100%;
  }
`;

export default Button;
