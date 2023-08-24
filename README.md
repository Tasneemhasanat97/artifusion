This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel


1. shadcnUI used insted of other css frameworks is because it is not a component library. It allows us to export the components
   for the project we are working on ArtiFusion, locally and after pushed to a remote branch in github. We also have full flexibility
   to modify said components to our bussiness model if any changes are needed. It also helps to keep the code loosely typed allowing
   flexibiliy. Using Chakra for a @prev project I noticed I did not have access to component source code(How components work)
   (we can only import and tailor them to specifications)
   (Once installed with CLI user can directly import components and they will appear in project folder as .js or .tsx file)
   (The individual components contains tightly typed code === perfect for maintainance)
   (Gives ownership to component system)
   (Implemented Route groups to prevent folders in app from being included in the route's URL path)
   (Organize route segments without affecting URL path structure)
   (adds utility to structure file hierarchy)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Building a Full Stack AI Platform

## Introduction and Overview
- The tutorial is about building a full stack AI platform with five different AI tools.
- A subscription system using Stripe, allowing free and paid tiers.

## Features and Functionalities
- **Image Generation:** Generate images based on text prompts.
- **Video Generation:** Similar to image generation but for videos.
- **Conversation Model:** Answer questions like "what is the radius of the sun?"
- **Music Generation:** Create audio files.
- **Code Generation:** Generates code using react hooks and tailwind.
- **Subscription Model:** Free tier limited to five generations.
- **Customer Support:** Utilizes Crisp for real-time support.
- **Authentication:** Uses clerk for user authentication.

## Coding and Implementation
- Walkthrough of setting up the project using Next.js, Tailwind CSS, TypeScript.
- Detailed instructions for initializing the project.

## Unique Selling Points
- **Customization and Control:** Direct access to components.
- **Full Stack Production Ready:** Includes subscription management, landing page creation, and more.

## Target Audience and Purpose
- Aimed at developers interested in AI, SaaS platforms, and full-stack development.
- Provides practical knowledge for building a commercial AI product.

# Additional Components, Routing, and Styling

## Adding Components with Shat CNUI
- Demonstrates how to add a button component.
- Emphasizes complete ownership and customization.

## Project Structure and Routing
- Discusses the use of route groups.
- Creates a dashboard page and a landing page.

## UI Components and Styling
- Demonstrates how to use the button component.
- Explores the option to rename properties like "destructive" to "danger."

## Global Styling
- Adds global styling for HTML and body elements.
- Updates the title and description of the application.

## Setting Up Landing and Dashboard Pages
- Creates a "landing" route group for the unprotected landing page and a "dashboard" route group for the protected dashboard page.

## Best Practices and Conventions
- Uses a consistent naming convention for pages.

## Preview and Testing
- Tests the newly created pages by running the project and navigating to the respective URLs.

# Refactoring, Authentication, and Integration

## Refactoring Pages and Structure
- Refined the directory structure for better organization.

## Adding Authentication with Clerk
- Stopped the running application to avoid hot reloading errors.
- Integrated Clerk into the project.

## Emphasizing the Ease of Clerk Integration
- Highlighted the seamless compatibility of Clerk.

# Routing, Mobile Sidebar, and Page Creation

## Routing and Sidebar
- Changed the routes for various sections.

## Mobile Sidebar
- Created a component named 'mobile-sidebardsx' for mobile devices.

## Shatsian Library
- Made use of the Shatsian library to create a drawer-like sidebar for mobile view.

## Highlighting Active Route
- Added logic to highlight the active page in the sidebar.

## Dashboard Page Creation
- Started building the dashboard page with an AI theme.

# Dashboard, Conversation Page, and Form Building

## Dashboard Creation
- Built the dashboard page with working sidebars and implemented routing and authentication.

## Conversation Page Creation
- Set up a new conversation page and defined necessary props.

## Form Building
- Added form handling using React Hook Form, defined validation schemas with Zod, and styled the form.

# OpenAI Integration and Configuration

## Setting up the Project Structure
- Organized the app with folders for API and conversation handling.

## Installing Packages
- Installed OpenAI and Axios to manage the chat completions and HTTP requests.

## Configuring OpenAI
- Set up the API key and created a post route for handling the chat.

## Error Handling
- Implemented error handling with try-catch blocks.

## Frontend Development
- Worked on the front-end using React state and Axios to handle messages and make API calls.

## Styling and Components
- Created a chat interface with loading states, empty states, and messages, and styled them accordingly.

## User Avatars
- Added user avatar components with fallbacks.

# Modifying Chat Messages and Handling Images

## Modifying Chat Messages and Removing Images
- Removed images from messages.
- Modified the `onSubmit` function and the form schema.

## Handling Images
- Creation of constants for images and setting up the state for image handling.

## Creating and Rendering Images
- Prepared the response to work with images.
- Rendered images using next/image and configured the host name in the Next.js config.

# Music Generation, API Limits, and Front-End Development

## Music Generation with Replicate
- Built the music generation page.
- Rendered an audio element to play the generated music.

## Implementation of API Limits
- Utilized Prisma to handle API limit functionality.

## Integration with PlanetScale
- Established a connection with PlanetScale using Prisma.

## Subscription Control for Free Users
- Set a maximum free count for free-tier users.

## Database Monitoring with Prisma Studio
- Utilized Prisma Studio to monitor the user API limits in real time.

## Front-End Development and Enhancements
- Integrated a counter displaying the number of free generations in the sidebar.

# UI Adjustments, Error Handling, Customer Support, and More

## UI Adjustments and Condition Handling
- Added a check for pro subscription.
- Managed the application's state for different components.

## Error Handling and User Feedback
- Introduced better error handling using `react-hot-toast`.

## Integration with Crisp for Customer Support
- Started the integration of Crisp for live chat functionality.

## Code Quality and Management
- Maintained clean and consistent code practices.

## Next Steps
- Upcoming work includes adding a landing page and deployment.

# Stripe Integration, Webhook Handling, and Deployment

## Importing Libraries and Dependencies
- Imports for Stripe, Next.js, Prisma, and custom Stripe URL.

## Handling Stripe Webhook
- Exports a function that handles Stripe webhooks.

## Event Handling
- Checks for specific Stripe events.

## Handling Checkout Session Completed Event
- Retrieves subscription details and creates a Prisma subscription.

## Handling Invoice Payment Succeeded Event
- Retrieves subscription details and updates the Prisma database.

## Webhook Testing and Local Development
- Outlines the process of testing the webhook locally.

## Creating a Route for Upgrading Subscriptions
- Creates a client-side function to handle the "upgrade" button.

## Prisma Studio and Webhook Terminal
- Monitors actions in real-time through the webhook terminal and Prisma Studio.

## Creating a Settings Page and Subscription Util
- Creates a settings page and a utility function to check if the user is subscribed.

## Conclusion
- A robust example of integrating Stripe for handling subscriptions in a web application.

