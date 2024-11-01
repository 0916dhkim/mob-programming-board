import { css, cx } from "#/styled-system/css";
import { Tag } from "./tag";

type Props = {
  name: string;
  userName: string;
  description: string;
  className?: string;
};

export function ProjectCard(props: Props) {
  return (
    <div
      className={cx(
        props.className,
        css({
          borderRadius: "lg",
          background: "background-secondary",
          padding: 4,
        })
      )}
    >
      <h5
        className={css({
          fontWeight: "bold",
          fontSize: "lg",
          mb: 1,
        })}
      >
        {props.name}
      </h5>
      <div>
        <span
          className={css({
            fontSize: "md",
            mb: 1,
          })}
        >
          {props.userName}
        </span>
      </div>
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          mb: 2,
        })}
      >
        <a
          className={css({
            border: "default",
            borderRadius: "full",
            fontSize: "md",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            py: 1,
          })}
        >
          source code
        </a>
        <Tag name="Next.js" />
        <Tag name="React" />
        <Tag name="Javascript" />
      </div>
      <p
        className={css({
          fontSize: "md",
          color: "text-secondary",
        })}
      >
        {props.description}
      </p>
    </div>
  );
}
