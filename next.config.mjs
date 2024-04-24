import MillionLint from "@million/lint";
import million from "million/compiler";

import { fileURLToPath } from "url";
import createJiti from "jiti";

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
};

const millionConfig = {
	auto: true,
};

export default MillionLint.next({
	rsc: true,
})(million.next(nextConfig, millionConfig));
