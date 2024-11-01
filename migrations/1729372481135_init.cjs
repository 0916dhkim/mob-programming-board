/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("projects", {
    id: "id",
    name: { type: "text", notNull: true },
    description: { type: "text" },
    user_display_name: { type: "text", notNull: true },
    user_email: { type: "text" },
  });
};
