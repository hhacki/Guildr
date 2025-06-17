# Guildr

Guildr is a Discord bot that features commands to quickly build or purge server channels using predefined templates.

Built with [discord.js](https://discord.js.org/).

## Commands

- **/build**: Instantly create a set of channels and categories based on selected templates.
- **/purge**: Remove all channels and categories from the server.

## Setup

1. **Clone the repository:**
   ```
   git clone https://github.com/hhacki/Guildr.git
   cd Guildr
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Discord bot token:
     ```
     TOKEN = <your-bot-token-here>
     ```

4. **Run the bot:**
   ```
   npm start
   ```

## Usage

- Invite the bot to your server with the "bot" scope and the following permissions:
    - Manage Channels
    - View Channels
    - Send Messages
    - Read Message History
- Use `/build` to select a template and build your server.
- Use `/purge` to remove all channels and categories.

