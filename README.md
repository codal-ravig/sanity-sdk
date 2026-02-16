# Sanity SDK Monorepo

This repository is a monorepo containing a feedback application and a Sanity studio.

## Project Structure

- `app-feedback`: The frontend application for collecting feedback.
- `studio`: The Sanity Studio for managing feedback data.

## Getting Started

### Prerequisites

- [pnpm](https://pnpm.io/installation) installed globally.

### Installation

Install dependencies for all packages from the root:

```bash
pnpm install
```

### Development

Run the feedback app:

```bash
pnpm dev:app
```

Run the Sanity studio:

```bash
pnpm dev:studio
```

### Building

Build the feedback app:

```bash
pnpm build:app
```

Build the Sanity studio:

```bash
pnpm build:studio
```
