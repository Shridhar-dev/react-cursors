/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
    stories: ['../src/**/*.stories.@(js|jsx)'],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        '@storybook/addon-styling',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    core: {
        disableTelemetry: true, // 👈 Disables telemetry
    },

    docs: {
        autodocs: "tag",
    },
};
export default config;
