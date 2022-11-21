# 📱 IOS in 🌐 Web

🔗 Link: [https://web-in-ios.vercel.app](https://web-in-ios.vercel.app)

Inspired by [macos.vercel.app](https://macos.vercel.app), this is an attempt to replicate Apple IOS for the iPhone. Aiming to function as close to a real iPhone as possible, including replicating the online services with serverless functions (this hasn't been started yet). This project uses React and is built by Vite, then deployed to Vercel. This is still very much in development, it will take a lot of work to replicate ios.

## Development

Install dependencies
```bash
yarn install
```

Run the development server
```bash
yarn dev
```

## Important folders for development

  - Apps
    - Stores all the individual apps
    - They get lazy loaded on demand by the user
    - This includes the launcher, that gets started on boot
  - IOS
    - This has everything for the running of the os
    - Eg, App Manager, Files management, Notifications, etc
  - modules
    - Think of these as npm modules that are specific to this project. They are accessed and used directly by the apps.
    - Need to be built in a reusable and isolated way
  - Page
    - For a clean src folder, everything that would normally be stored in the src folder has been moved here.
    - This mainly just sets up the page and renders the iPhone