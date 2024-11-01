import { css } from "#/styled-system/css";

export const input = css.raw({
  background: "background-secondary",
  border: "none",
  borderRadius: "sm",
  mb: 4,
  width: "100%",
  fontSize: "md",
});

export const button = css.raw({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "background-secondary",
  transition: "filter 0.2s ease-in-out",
  "&:hover": {
    filter: "brightness(1.2)",
  },
  color: "text-primary",
  borderRadius: "full",
  fontWeight: "bold",
  fontSize: "lg",
  padding: 1,
});
