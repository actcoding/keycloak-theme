export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#FBF5FF",
                    100: "#F7EBFF",
                    200: "#EACDFE",
                    300: "#DEAFFE",
                    400: "#CE86FD",
                    500: "#B74FFC",
                    600: "#7303C0",
                    700: "#6803AB",
                    800: "#55028D",
                    900: "#3D0264",
                    950: "#2B0146"
                },
                secondary: {
                    50: "#FEF6FC",
                    100: "#FDECF9",
                    200: "#FBD5F1",
                    300: "#F9BEE9",
                    400: "#F6A2E0",
                    500: "#F278D2",
                    600: "#EC38BC",
                    700: "#DB15A6",
                    800: "#B6118A",
                    900: "#820C63",
                    950: "#5D0947"
                },

                provider: {
                    apple: "#000000",
                    bitbucket: "#0052CC",
                    discord: "#5865F2",
                    facebook: "#1877F2",
                    github: "#181717",
                    gitlab: "#FC6D26",
                    google: "#4285F4",
                    instagram: "#E4405F",
                    linkedin: "#0A66C2",
                    microsoft: "#5E5E5E",
                    oidc: "#F78C40",
                    openshift: "#EE0000",
                    paypal: "#00457C",
                    slack: "#4A154B",
                    stackoverflow: "#F58025",
                    twitter: "#1DA1F2"
                }
            }
        }
    },
    plugins: []
};
