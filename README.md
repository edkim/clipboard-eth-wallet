# Clipboard Wallet Generator

A secure command-line tool that generates an Ethereum wallet and copies its private key to your clipboard.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the wallet generator:
   ```bash
   npm run generate
   ```

## Usage

The script will:
1. Generate a new Ethereum wallet
2. Copy the private key to your clipboard
3. Display the wallet's public address
4. Wait for you to paste the key (e.g., into Tenderly Secrets)
5. Clear your clipboard after you press ENTER

## Security Notes

- The private key is only stored in your clipboard temporarily
- The clipboard is automatically cleared after you paste the key
- Never share your private key with anyone
- Always store your private key securely

## Dependencies

- ethers.js: For Ethereum wallet generation
- clipboardy: For clipboard operations

## License

MIT
