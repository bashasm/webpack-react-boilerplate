module.exports = function(api) {
    api.cache(true);

    const presets = [
        [
            "@babel/preset-env",
            {
                targets: [
                    "last 2 versions",
                    "not dead",
                    "not < 2%",
                    "not ie 11"
                ]
            }
        ],
        "@babel/preset-react"
    ];
    const plugins = [
        "react-hot-loader/babel",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-syntax-dynamic-import"
    ];

    return {
        presets,
        plugins
    };
};
