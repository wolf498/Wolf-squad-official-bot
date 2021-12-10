const DiscordMusicBot = require("./structures/DiscordMusicBot");
const client = new DiscordMusicBot();

client.build();

module.exports = client; //;-;
const { keep_alive } = require("./keep_alive");