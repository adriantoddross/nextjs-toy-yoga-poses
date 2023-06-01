# Yoga Poses

This app shows random yoga poses that can be done while taking breaks from sedentary work.

**The purpose of this project is to:**

- Practice scoping tasks and estimating how long tasks will take
- Practice communicating and mitigating risks when tasks are taking longer than estimated
- Demonstrate an understanding of how to setup a new codebase quickly
- Demonstrate understanding of building applications using Jamstack
  architecture
- Demonstrate an level 1-2 understanding of React in accordance with thoughtbot's developer expectations.

# Development

This project was bootstraped with `create-next-app` using the [with-typescript-graphql](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-graphql) template from the [Next.js examples](https://github.com/vercel/next.js/tree/canary/examples) repo.

This project uses [yarn](https://yarnpkg.com/) for package management. Use `yarn install` to install all dependencies for the project. Start the development server with `yarn dev`.

## API

Consume the yoga poses API with at `/api/graphql`. You can get use the `getPoses` query to get a single yoga pose object.

# Architecture

- Next.js
- GraphQL
- Tailwind CSS
