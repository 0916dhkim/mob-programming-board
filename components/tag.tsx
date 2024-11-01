import { css } from "#/styled-system/css";

type Props = {
  name: string;
};

export function Tag(props: Props) {
  return (
    <div
      className={css({
        borderRadius: "full",
        background: "background-tag",
        color: "text-tag",
        fontSize: "md",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
        py: 1,
      })}
    >
      {props.name}
    </div>
  );
}
