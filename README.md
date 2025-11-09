# thakei.dev

[binay.dev.vercel.app](https://binay-dev.vercel.app) — Personal/developer site built with React + Vite

---

## Table of Contents

* [About](#about)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Development](#development)
* [Build and Deployment](#build-and-deployment)
* [Configuration](#configuration)

---

## About

`thakei.dev` is a web project showcasing a personal or developer website. It uses React for the UI with Vite as the build tool. The site is hosted (or deployable) on Vercel.

---

## Features

* Fast hot module reloading (HMR) during development
* Clean minimal setup — no unnecessary boilerplate
* ESLint configured for code quality and consistency
* Simple structure suited for personal portfolio or blog sites

---

## Tech Stack

| Layer                | Technology                             |
| -------------------- | -------------------------------------- |
| UI                   | React                                  |
| Build Tool           | Vite                                   |
| Linting              | ESLint                                 |
| Hosting / Deployment | Vercel (or any static-hosting service) |

---

## Prerequisites

To run this project locally, you will need:

* Node.js (preferably latest LTS version)
* npm or yarn package manager

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/481n4y4/thakei.dev.git
cd thakei.dev
npm install
# or if using yarn
# yarn install
```

---

## Development

To start the developer server with live reloading:

```bash
npm run dev
# or
# yarn dev
```

This will spin up a local server (by default at `http://localhost:5173`) and watch for changes.

---

## Build and Deployment

To build the production version:

```bash
npm run build
# or
# yarn build
```

This produces optimized and minified static files in the `dist` folder (or as configured in Vite).

You can deploy the contents of `dist` to any static hosting platform. For example, Vercel is already being used in this project.

---

## Configuration

Some relevant config files in the project:

* `vite.config.js` — Vite configuration
* `.eslint.config.js` — ESLint rules
* `package.json` — Dependencies and scripts

You may customize these as needed (e.g. add TypeScript, change ESLint rules, etc.)

---

## Folder Structure

Here’s a high-level overview of the main folders and files:

```
/
├── public/               # Static assets
├── src/                  # Source files: React components, styles, etc.
├── index.html            # Entry HTML file
├── package.json          # Project metadata and dependencies
├── vite.config.js        # Vite build configuration
├── .eslint.config.js     # Linting configuration
└── README.md             # This file
```

---