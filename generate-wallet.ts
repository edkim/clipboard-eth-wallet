import { Wallet } from "ethers";
import clipboard from "clipboardy";

async function main() {
  const wallet = Wallet.createRandom();

  await clipboard.write(wallet.privateKey);
  console.log("✅ Private key copied to clipboard.");
  console.log("📬 Address:", wallet.address);

  console.log("🛡️ Press ENTER once you've pasted the key into Tenderly to clear your clipboard.");
  process.stdin.resume();
  process.stdin.on("data", async () => {
    await clipboard.write('');
    console.clear();
    console.log("✅ Clipboard cleared.");
    process.exit(0);
  });
}

main();