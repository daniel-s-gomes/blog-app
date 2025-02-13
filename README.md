This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.


## Aproach

Summary of the Approach
1. Simplified Filtering
Chose a few repeated words (e.g., est, quia, aut, ea) from the posts to use as filters.

Filter buttons were created for these words, and clicking a button filters the posts to show only those containing the selected word.

A "Clear Filter" button was added to reset the filter and display all posts.

2. Key Features
Static Generation: Used getStaticProps to fetch and pre-render the posts at build time.

Client-Side Filtering: The filtering logic was implemented on the client side using React state (useState).

Responsive Design: Tailwind CSS was used to create a responsive grid layout for the posts.

3. Components
Homepage (pages/index.js): Displays the filter buttons and the list of posts.

Post Card (components/PostCard.js): Displays the title, excerpt, and a "Read More" link for each post.

Layout (components/Layout.js): Provides a consistent layout with a navigation bar.

4. Why This Approach?
Simplicity: The task required basic filtering functionality, and this approach is straightforward and easy to implement.

Performance: Static generation (getStaticProps) ensures fast page loads and good SEO.

User Experience: The filter buttons are intuitive and provide immediate feedback.

Why I didn’t Use the App Router
1. Complexity vs. Requirements
The App Router (introduced in Next.js 13) is designed for more advanced use cases, such as:

Nested layouts.

Streaming and React Server Components.

Advanced data fetching patterns.

For this task, the requirements were simple:

Display a list of posts.

Filter posts based on selected words.

Use static generation (getStaticProps).

The Pages Router is perfectly suited for these requirements and is easier to implement for small to medium-sized projects.

2. Compatibility
The Pages Router is compatible with all versions of Next.js, including older ones.

Since the task didn’t require advanced features like nested layouts or streaming, there was no need to use the App Router.

3. Evaluation Criteria
The PDF mentioned evaluating proficiency with getStaticProps and getStaticPaths, which are core features of the Pages Router.

Using the Pages Router allowed us to demonstrate these skills effectively.

4. Learning Curve
The Pages Router is well-documented and widely used, making it easier to follow tutorials and examples.

For developers new to Next.js, the Pages Router is more approachable.

When to Use the App Router
The App Router is more suitable for:

Large-scale applications with complex routing and layouts.

Advanced features like React Server Components, streaming, and incremental static regeneration.

Nested layouts where different parts of the page need to load independently.

Final Thoughts
The approach I took was simple, efficient, and aligned with the task requirements.

By using the Pages Router, I were able to focus on the core functionality (filtering and displaying posts) without unnecessary complexity.

If you ever need to build more advanced applications in the future, the App Router will be a powerful tool to explore.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.

