# 🍄 [Mush-API.JS](https://npmjs.com/package/mush-api.js)

[![npm version](https://img.shields.io/npm/v/mush-api.js)](https://www.npmjs.com/package/mush-api.js)
[![npm downloads](https://img.shields.io/npm/dm/mush-api.js)](https://www.npmjs.com/package/mush-api.js)
![typescript](https://img.shields.io/badge/built%20with-TypeScript-blue)

An unofficial Node.js wrapper for the [Mush](https://mush.com.br/) API.

> [!NOTE]
> Please note that the typings were generated based on data collected from multiple players and may be outdated or change over time.

## 🚀 Features
- **Developer-first**, no more optional chaining on API objects — this package handles everything for you
- **Type-safe classes**, making the API easier and safer to use without guessing object structures
- **Built-in error handling**, so you can focus on returned data instead of manually checking API statuses and errors

## 📦 Installation

Install the package using your preferred package manager:

| Package Manager | Command |
|-----------------|---------|
| [npm](https://npmjs.com/) | `npm install mush-api.js` |
| [pnpm](https://pnpm.io/) | `pnpm add mush-api.js` |
| [yarn](https://yarnpkg.com/) | `yarn add mush-api.js` |
##### Requires Node.js 18 or higher.

## 📡 Usage
```javascript
import { MushClient, MushAPIJSError } from "mush-api.js";
// You can use CommonJS as well
// const { MushClient, MushAPIJSError } = require("mush-api.js");

const client = new MushClient();

try {
  const player = await client.getPlayer("mariaum");

  console.log(player.username); // mariaum
  console.log(player.rank.name); // Admin
  console.log(player.bedwars.wins); // 29
} catch (error) {
  if (error instanceof MushAPIJSError) {
    console.log(error.message); // Entity not found
    console.log(error.statusCode); // 404
  }
}
```

## ✨ Credits

- [Mush](https://mush.com.br/) for providing the public API
- [yPandinho](https://forum.mush.com.br/user/yPandinho) for documenting the API in this [forum topic](https://forum.mush.com.br/topic/149525/documenta%C3%A7%C3%A3o-api-mush/)

## ⭐ Contributing

Contributions are welcome!

If you want to improve this package, feel free to [open a pull request](https://github.com/murilommelo/mush-api.js/pulls).  
If you find a bug or want to suggest a feature, please [open an issue](https://github.com/murilommelo/mush-api.js/issues) describing the problem or idea.