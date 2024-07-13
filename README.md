# React Monorepo Setup with pnpm and Vite

This repository demonstrates a monorepo setup for React projects using pnpm and Vite.

## Prerequisites

- Node.js
- pnpm (`npm install -g pnpm`)

## Quick Start

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Run tests: `pnpm test`

## Structure

- `packages/`: Shared packages
  - `utils/`: Utility functions
  - `ui/`: UI components
- `project-one/`: First Next.js project
- `project-two/`: Second Next.js project

## Commands

- Install: `pnpm install`
- Test: `pnpm test`
- Run a project: `pnpm --filter <project-name> dev`

## Adding a New Package

1. Create a new directory in `packages/`
2. Initialize with `pnpm init`
3. Add to `pnpm-workspace.yaml`
4. Install dependencies: `pnpm add -D --filter @mono/<package-name> <dependencies>`

## Using Shared Packages

In project `package.json`:

```json
{
  "dependencies": {
    "@mono/ui": "workspace:*",
    "@mono/utils": "workspace:*"
  }
}