# 🍄 [Mush-API.JS](https://npmjs.com/package/mush-api.js)

[![npm version](https://img.shields.io/npm/v/mush-api.js)](https://www.npmjs.com/package/mush-api.js)
[![npm downloads](https://img.shields.io/npm/dm/mush-api.js)](https://www.npmjs.com/package/mush-api.js)
![typescript](https://img.shields.io/badge/built%20with-TypeScript-blue)

An unofficial Node.js wrapper for the [Mush](https://mush.com.br/) API.

> [!NOTE]
> Please note that the typings were generated based on data collected from multiple players and may be outdated or change over time.

## 📦 Installation

Install the package using your preferred package manager:

| Package Manager | Command |
|-----------------|---------|
| [npm](https://npmjs.com/) | `npm install mush-api.js` |
| [pnpm](https://pnpm.io/) | `pnpm add mush-api.js` |
| [yarn](https://yarnpkg.com/) | `yarn add mush-api.js` |
##### This package requires Node.js 18 or higher.

## 📡 Usage
```typescript
import { MushClient, Routes } from "mush-api.js";
// You can use CommonJS as well
// const { MushClient, Routes } = require("mush-api.js");

const client = new MushClient();

const player = await client.api.request(Routes.Player("mariaum"));

console.log(player);
```

## 📝 To-do

- Reduce typings for `bedwars`, `duels` & `hungergames` files.
- Typings, classes and routes for Player, Game, Punishment & XP table
- Rate limit handling

## ✨ Credits

- [Mush](https://mush.com.br/) for providing the public API
- [yPandinho](https://forum.mush.com.br/user/yPandinho) for documenting the API in this [forum topic](https://forum.mush.com.br/topic/149525/documenta%C3%A7%C3%A3o-api-mush/)

## ⭐ Contributing

Contributions are welcome!

If you want to improve this package, feel free to [open a pull request](https://github.com/murilommelo/mush-api.js/pulls).  
If you find a bug or want to suggest a feature, please [open an issue](https://github.com/murilommelo/mush-api.js/issues) describing the problem or idea.