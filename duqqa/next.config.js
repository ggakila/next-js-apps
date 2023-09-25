/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
}

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.dummyjson.com",
				pathname: "/products/**",
			},
		],
	},
};
