# 🍄 [MushMC.JS](https://npmjs.com/package/mushmc.js)

[![npm version](https://img.shields.io/npm/v/mushmc.js)](https://www.npmjs.com/package/mushmc.js)
[![npm downloads](https://img.shields.io/npm/dm/mushmc.js)](https://www.npmjs.com/package/mushmc.js)
![typescript](https://img.shields.io/badge/built%20with-TypeScript-blue)

An unofficial Node.js wrapper for the [MushMC](https://mush.com.br/) API.

## 📦 Installation

Install the package using your preferred package manager:

| Package Manager | Command |
|-----------------|---------|
| [npm](https://npmjs.com/) | `npm install mushmc.js` |
| [pnpm](https://pnpm.io/) | `pnpm add mushmc.js` |
| [yarn](https://yarnpkg.com/) | `yarn add mushmc.js` |


## 📡 Usage
```typescript
import { MushClient, Routes } from "mushmc.js";
// CommonJS: const { MushClient, Routes } = require("mushmc.js");

const client = new MushClient();

const player = await client.api.request(Routes.Player("mariaum"));

console.log(player);
```

## 📝 To-do

- Correct typing for Player statistics
- Rate limit handling
- Methods for specific Player details
- Game, Leaderboard & Punishment manager
- Method to fetch XP tables

## ✨ Credits

- [MushMC](https://mush.com.br/) for providing the public API
- yPandinho for documenting the API in this [forum topic](https://forum.mush.com.br/topic/149525/documenta%C3%A7%C3%A3o-api-mush/)

## ⭐ Contributing

Contributions are welcome!

If you want to improve this package, feel free to open a pull request.  
If you find a bug or want to suggest a feature, please open an issue describing the problem or idea.