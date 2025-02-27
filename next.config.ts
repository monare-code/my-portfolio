import type { NextConfig } from "next";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig: NextConfig = {
    webpack(config, { isServer }) {
        // Only apply the plugin on the client side
        if (!isServer) {
            config.plugins.push(
                new MiniCssExtractPlugin({
                    filename: "static/css/[name].[contenthash].css",
                })
            );
        }

        return config;
    },
};

export default nextConfig;

