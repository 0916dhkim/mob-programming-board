import { NewProjectForm } from "#/components/new-project-form";
import { db } from "#/lib/db";
import { ActionFunctionArgs, redirect } from "react-router";
import { sql } from "slonik";

export default function SubmitProject() {
  return <NewProjectForm />;
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const name = body.get("name");
  const description = body.get("description");
  const userName = body.get("userName");
  const email = body.get("email");

  if (typeof name !== "string" || name.length === 0) {
    return { error: "Name must be a string" };
  }
  if (typeof description !== "string" || description.length === 0) {
    return { error: "Description must be a string" };
  }
  if (typeof userName !== "string" || userName.length === 0) {
    return { error: "User name must be a string" };
  }
  if (typeof email !== "string" || name.length === 0) {
    return { error: "Email must be a string" };
  }

  await db.query(
    sql.unsafe`INSERT INTO projects (name, description, user_display_name, user_email) VALUES (${name}, ${description}, ${userName}, ${email})`
  );

  return redirect("/");
}
