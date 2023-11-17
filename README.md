# LCLI (Local CLI)

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
- Convert date times between timezones.
- List and Get conversion rates for the Argentine peso and the US Dollar. 

## Technology Stack

- TypeScript
- PNPM
- Yargs

## Project structure

```yaml
.
├─ src/                         # Source folder
│  ├─ commands/                 # Commands folders
│  │  ├─ ctime/
│  │  │  ├─ ctime_commands/     # Sub Commands for ctime
│  │  │  │   ├─ convert.ts
│  │  │  │   └─ list.ts
│  │  │  ├─ ctime.outputs.ts
│  │  │  ├─ ctime.ts 
│  │  │  └─ ctime.types.ts    
│  │  ├─ trans/
│  │  │  ├─ trans_commands/     # Sub Commands for trans
│  │  │  │   ├─ list.ts
│  │  │  │   └─ translate.ts           
│  │  │  ├─ trans.outputs.ts
│  │  │  ├─ trans.ts 
│  │  │  └─ trans.types.ts
│  │  └─ usd/
│  │     ├─ usd_commands/       # Sub Commands for usd
│  │     │   ├─ get.ts
│  │     │   └─ list.ts             
│  │     ├─ usd.outputs.ts
│  │     ├─ usd.ts 
│  │     └─ usd.types.ts  
│  ├─ cli.ts                    # CLI Tool entrypoint
│  ├─ handleError.ts            # CLI error-handler helper
│  ├─ shared.ts                 # CLI shared constructors (builder, handler, options)
│  └─ util.ts                   # CLI utility class with functions
├─ .gitignore                   # Configuration files                  
├─ package.json
├─ pnpm-lock.yaml
├─ README.md                    # This file :)
└─ tsconfig.json
```

## Usage

### Timezone Converter

```bash
# Convert PST Time to ART time
lcli ctime convert -f 'PST' -t 'ART' 

# Output using current time
┌─────────────────────────┬─────────────────────────┐
│ From                    │ To                      │
├─────────────────────────┼─────────────────────────┤
│ PST                     │ ART                     │
├─────────────────────────┼─────────────────────────┤
│ 11:47                   │ 15:47                   │
└─────────────────────────┴─────────────────────────┘


lcli ct cv -f 'PST' -t 'ART' --specific '12:00'

# Output
┌─────────────────────────┬─────────────────────────┐
│ From                    │ To                      │
├─────────────────────────┼─────────────────────────┤
│ PST                     │ ART                     │
├─────────────────────────┼─────────────────────────┤
│ 12:00                   │ 16:00                   │
└─────────────────────────┴─────────────────────────┘
```

### Translator

```bash
# List supported languages
lcli trans list 

# Output
┌─────────────────────────┬─────────────────────────┐
│ Language                │ Abbreviation            │
├─────────────────────────┼─────────────────────────┤
│ afrikaans               │ af                      │
├─────────────────────────┼─────────────────────────┤
│ albanian                │ sq                      │
├─────────────────────────┼─────────────────────────┤
│ amharic                 │ am                      │
├─────────────────────────┼─────────────────────────┤
│ arabic                  │ ar                      │
├─────────────────────────┼─────────────────────────┤
│ armenian                │ hy                      │
├─────────────────────────┼─────────────────────────┤
│ azerbaijani             │ az                      │
├─────────────────────────┼─────────────────────────┤
│ basque                  │ eu                      │
├─────────────────────────┼─────────────────────────┤
│ ...                     │ ...                     │
└─────────────────────────┴─────────────────────────┘
```

```bash
# Translate phrase between languages
lcli trans translate -f 'es' -t 'ko' -d 'Hola' 

# Output
안녕하세요
```

### USD

```bash
# List all the conversion rates
lcli usd list

┌─────────────────────────┬────────────────────┬────────────────────┬─────────────────────────┐
│ Currency                │ Buy Conversion ra… │ Sell Conversion r… │ Last update             │
├─────────────────────────┼────────────────────┼────────────────────┼─────────────────────────┤
│ Official                │ $348,96            │ $368,60            │ 01/11/2023 12:00:00     │
├─────────────────────────┼────────────────────┼────────────────────┼─────────────────────────┤
│ Blue                    │ $890               │ $910               │ 01/11/2023 12:00:00     │
├─────────────────────────┼────────────────────┼────────────────────┼─────────────────────────┤
│ CCL                     │ $775.23            │ $865.52            │ 01/11/2023 12:00:00     │
└─────────────────────────┴────────────────────┴────────────────────┴─────────────────────────┘
```

```bash
# Get specific conversion rate
usd get 'blue' # usd g <usdType>

┌─────────────────────────┬────────────────────┬────────────────────┬─────────────────────────┐
│ Currency                │ Buy Conversion ra… │ Sell Conversion r… │ Last update             │
├─────────────────────────┼────────────────────┼────────────────────┼─────────────────────────┤
│ Blue                    │ $890               │ $910               │ 01/11/2023 12:00:00     │
└─────────────────────────┴────────────────────┴────────────────────┴─────────────────────────┘
```

## Installation

```bash
npm i lcli

lcli --help
```

## Contributing

Agustin Magliano

## External References

* [Fetch in TypeScript](https://rapidapi.com/guides/api-call-typescript)
* [CLI Tool with TypeScript and Yargs](https://medium.com/geekculture/building-a-node-js-cli-with-typescript-packaged-and-distributed-via-homebrew-15ba2fadcb81)
