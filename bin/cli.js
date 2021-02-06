#!/usr/bin/env node

require("../min/index.js").default().then(num => num && console.error("エラー発生"))