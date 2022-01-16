const { withPlausibleProxy } = require("next-plausible");
const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

module.exports = withPlausibleProxy()(
  withContentlayer()({
    reactStrictMode: true
  })
);
