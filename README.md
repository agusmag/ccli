# CCLI

## Table of Contents
- [Goal](#goal)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Getting Started](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Goal

Custom CLI tool to help the user with different scenarios. It works as utility tool.

## Features

- Translate words, phrases, or paragraphs between languages.

## Technology Stack

- TypeScript
- PNPM
- Yargs

## Project structure

```yaml
.
├─ src/                         # Source folder
│  ├─ commands/
│  │  ├─ trans.outputs.ts       # List command files
│  │  ├─ trans.ts 
│  │  └─ trans.types.ts   
│  ├─ cli.ts                    # CLI Tool entrypoint
│  └─ handleError.ts            # CLI error-handler helper
├─ .gitignore                   # Configuration files                  
├─ package.json
├─ pnpm-lock.yaml
├─ README.md                    # This file :)
└─ tsconfig.json
```

## System Architecture

TBC

* CLI Tool (Entrypoint)
* Translate API

## Installation

TBC

<!--
### Step 1
 
```bash
# Installation steps, e.g., for setting up dependencies or downloading the tool
``` -->

## Configuration

<!-- Explain how to configure your tool, including any environment variables or configuration files that need to be set. -->

TBC

## Usage

```bash
# Translate phrase between languages
ccli trans -f 'es' -t 'kr' -d 'Hola' 

# Output
...
```

## Contributing

Agustin Magliano

## External References

* [Fetch in TypeScript](https://rapidapi.com/guides/api-call-typescript)
* [CLI Tool with TypeScript and Yargs](https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81)
