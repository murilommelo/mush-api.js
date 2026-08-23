# 🍄 [Mush-API.JS](https://npmjs.com/package/mush-api.js)

[![npm version](https://img.shields.io/npm/v/mush-api.js)](https://www.npmjs.com/package/mush-api.js)
[![npm downloads](https://img.shields.io/npm/dm/mush-api.js)](https://www.npmjs.com/package/mush-api.js)
![typescript](https://img.shields.io/badge/built%20with-TypeScript-blue)

An unofficial Node.js wrapper for the [Mush](https://mush.com.br/) API. Handling all the annoying stuff for you!

> [!NOTE]
> The typings were generated based on data collected from multiple players and may be wrong and change over time.

## 📦 Installation
##### Requires Node.js 18 or higher.

| Package Manager | Command |
|-----------------|---------|
| [npm](https://npmjs.com/) | `npm install mush-api.js` |
| [pnpm](https://pnpm.io/) | `pnpm add mush-api.js` |
| [yarn](https://yarnpkg.com/) | `yarn add mush-api.js` |

## 📡 Usage
```javascript
import * as mush from "mush-api.js";
// const mush = require("mush-api.js");

try {
  const player = await mush.getPlayer("yPandinho");

  console.log(player.username);     // yPandinho
  console.log(player.rank.name);    // Admin
  console.log(player.bedwars.wins); // 29
} catch (error) {
  if (error instanceof mush.MushAPIJSError) {
    console.log(error.message);    // Entity not found
    console.log(error.statusCode); // 404
  }
}
```

## ⭐ Contributing

Contributions are always welcome! You can contribute by [opening a pull request](https://github.com/murilommelo/mush-api.js/pulls) or [submitting a bug or feature idea](https://github.com/murilommelo/mush-api.js/issues).
