import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default {
	verbose: true,
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	driver: "turso",
	dbCredentials: {
		url: process.env.TURSO_CONNECTION_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN!,
	},
} satisfies Config;
