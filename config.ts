import themes from "daisyui/src/theming/themes";
import { ConfigProps } from "./types/config";

const config = {
  // REQUIRED
  appName: "Technical Test",
  // REQUIRED: a short description of your app for SEO tags
  appDescription: "Test project for implementing search and pagination with Next.js",
  // REQUIRED: Your domain name (replace with your actual domain)
  domainName: "yourdomain.com",
  
  // Colors for DaisyUI themes
  colors: {
    theme: "light", // Set to "light" by default
    // Reflects the primary color of your app, adjust as needed
    main: themes["light"]["primary"],
  },
  
  auth: {
    // Path for login redirection
    loginUrl: "/api/auth/signin",
    // Path for post-login redirection
    callbackUrl: "/dashboard",
  },
} as ConfigProps;

export default config;