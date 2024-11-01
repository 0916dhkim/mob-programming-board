import { css } from "#/styled-system/css";
import { Form } from "react-router";
import { button } from "#/components/common-styles";

const input = css({
  background: "background-secondary",
  border: "none",
  borderRadius: "sm",
  mb: 4,
  width: "100%",
  fontSize: "md",
});

const inputLabel = css({
  fontWeight: "bold",
  fontSize: "md",
  mb: 2,
});

const textarea = css({
  background: "background-secondary",
  border: "none",
  borderRadius: "4px",
  mb: 5,
  resize: "vertical",
  height: 20,
  width: "100%",
  fontSize: "md",
});

export function NewProjectForm() {
  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      })}
    >
      <Form
        method="POST"
        className={css({
          sm: {
            width: "{breakpoints.sm}",
          },
          px: 5,
          py: 9,
        })}
      >
        <h1
          className={css({
            fontWeight: "bold",
            fontSize: "2xl",
            mb: 7,
          })}
        >
          Tell us about more about your project!
        </h1>
        <h2
          className={css({
            fontWeight: "bold",
            fontSize: "md",
            mb: 1,
          })}
        >
          Name of the project
        </h2>
        <input name="name" type="text" className={input} />
        <h2 className={inputLabel}>What does the project do?</h2>
        <textarea name="description" className={textarea} />
        <h2 className={inputLabel}>What is your name?</h2>
        <input name="userName" type="text" className={input} />
        <h2 className={inputLabel}>What is your email?</h2>
        <input name="email" type="email" className={input} />
        <button
          className={css(button, {
            background: "{colors.purple.600}",
            color: "{colors.purple.50}",
            width: "100%",
            mt: 4,
          })}
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
