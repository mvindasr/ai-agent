# AI Agent

[![Framework: Node.js](https://img.shields.io/badge/framework-node.js-green.svg)](https://nodejs.org/)
[![types: typescript](https://img.shields.io/badge/types-typescript-blue.svg)](https://www.typescriptlang.org)
[![Validation: Zod](https://img.shields.io/badge/validation-zod-blue.svg)](https://zod.dev/)
[![package manager: npm](https://img.shields.io/badge/package_manager-npm-blue.svg)](https://www.npmjs.com/)

---

**AI Agent** is a command-line application that allows users to interact with an AI agent through various tools. The agent can retrieve information from Reddit, tell dad jokes, and create images using DALL-E.

![Example 1](./public/example1.png)
![Example 2](./public/example2.png)

---

## Installation

To get started with this project, follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/mvindasr/ai-agent.git
```

2. Navigate to the project directory

```bash
cd ai-agent
```

3. Install all dependencies

```bash
npm install
```

4. Setup .env file

Create a `.env` file in the `root` of the project. You can do it by copying the `.env.example` file:

```bash
cp ./.env.example ./.env
```

> The command assumes a Unix environment where the `cp` command is available.

Once you have the `.env` file, add the environment variable values in the file.

```env
OPENAI_API_KEY=your-openai-api-key
```

## Requirements

This project requires **Node.js version 20+**.

## Usage

Once you have set up the project and installed the dependencies, you can run the application:

```bash
npm start 'userMessage'
```

Replace `'userMessage'` with the message you want to send to the AI agent.

## Tools

The AI agent comes with the following tools:

1. **Reddit Tool**: Retrieves information from Reddit.
2. **Dad Joke Tool**: Tells a dad joke.
3. **DALL-E Tool**: Creates images using DALL-E.
