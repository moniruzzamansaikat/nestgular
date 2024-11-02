# nestgular

A project combining a NestJS backend and an Angular frontend, designed to be run simultaneously for streamlined development.

## Getting Started

This project uses the `concurrently` package to run both the backend (NestJS) and frontend (Angular) servers at the same time.

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20 or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository and navigate to the project root.
2. Install the required dependencies:

```bash
npm install && cd backend && npm install && cd ../frontend && npm install
```
In the root of the project, run the following command to start both the backend and frontend servers:
```bash
npm run dev
```
