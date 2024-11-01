import { Link, MetaFunction, useLoaderData } from "react-router";
import { sql } from "slonik";
import { css } from "#/styled-system/css";
import { button } from "#/components/common-styles";
import { db } from "#/lib/db";
import { ProjectCard } from "#/components/project-card";

export const meta: MetaFunction = () => [{ title: "Mob Programming" }];

export async function loader() {
  const { rows } = await db.query(sql.unsafe`SELECT * FROM projects`);
  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    userName: row.user_display_name,
  }));
}

export default function Index() {
  const rows = useLoaderData<typeof loader>();

  return (
    <div
      className={css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: 5,
        py: 9,
      })}
    >
      <main
        className={css({
          width: "100%",
          maxWidth: "{breakpoints.sm}",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        })}
      >
        <p
          className={css({
            fontSize: "2xl",
            fontWeight: "bold",
            textAlign: "center",
            lineHeight: "none",
            mb: 2,
          })}
        >
          The Next Event Is
        </p>
        <p
          className={css({
            fontSize: "7xl",
            fontWeight: "black",
            textAlign: "center",
            lineHeight: "none",
            background: "linear-gradient(to right, #5E27DE, #C62D53)",
            backgroundClip: "text",
            color: "transparent",
            mb: 4,
          })}
        >
          Sat Nov 2
        </p>
        <div
          className={css({
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mb: 8,
          })}
        >
          <span>Join us</span>
          <button>Meetup</button>
          <button>Guild</button>
        </div>
        <Link
          to="/submit-project"
          className={css(button, {
            background: "{colors.purple.600}",
            color: "{colors.purple.50}",
          })}
        >
          + YOUR PROJECT
        </Link>
        {rows.map((row) => (
          <ProjectCard
            key={row.id}
            name={row.name}
            userName={row.userName}
            description={row.description}
            className={css({
              mt: 4,
            })}
          />
        ))}
      </main>
    </div>
  );
}
