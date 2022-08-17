// const ethers = require("ethers");
// const fs = require("fs-extra");
// require("dotenv").config();

import { ethers } from "ethers";
import * as fs from "fs-extra";
import "dotenv/config";

var PRIVATE_KEY = "xxx";

async function main() {
  const wallet = new ethers.Wallet(PRIVATE_KEY);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.PRIVATE_KEY_PASSWORD!,
    PRIVATE_KEY
  );
  console.log(encryptedJsonKey);
  fs.writeFileSync("./encryptedKey_testnet.json", encryptedJsonKey);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
