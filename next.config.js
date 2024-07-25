/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "rc-util",
    "antd",
    "@ant-design",
    "rc-pagination",
    "rc-picker",
    "rc-tree",
    "rc-table",
    "ahooks",
  ],
};

module.exports = nextConfig;
