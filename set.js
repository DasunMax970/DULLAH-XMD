const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'DULLAH-MD;;;H4sIAAAAAAAAA5VU226rRhT9lWpe7ZwANsG2FKkYY3PzBTC+VUfVAAMec4cBY0d+7xdUzUOe+lJV6jf0l/IJFYmj5KHnNOVpNDOsvWatvfYDiBNcIBWdwOABpDmuIEHNkpxSBAZgWHoeykEbuJBAMABTbRPXSw7T+WIXm/kx5ZWASpPFKmYssR6tR7HEsDa3PEx69+DSBmlph9j5DmBuyrldekI6rEMKRrHGW2Ftj+ljv662G2fGDqNM2EP6MD7eg0uDCHGOY19M9yhCOQxVdFpAnH+OPiOlE2PZ60/PLFXIUN/dZWgZLki91p0siNZ2PdZi/dA7r6zP0R/TWjWmJtJ4M4xldV2k5OBqt+oex7uhz3cPylFUOd7a1YH4Sr/Afoxc2UUxweT0ad3F4U6clUEaFJv+rsujnq1Qx9zlV6f5jDlzszToQajfmSUVfI74Mqn1mls4x/MGURtnMtsHq0gwpsFUicbeEPGpuzWDu4W0On4kvsjfeiX4P7pvBWzah1rhgpblTjvEck6TVSWvD3O0Np3+xDA2ScvaSNqm+Bz9hK62U4kVda130lq0Gm7zjFId1uJ3KgcVRTHsw21y8itBf6cPSZl/j+XtXq8mShiZXi88CN5tHUSZBDvb4LAXVt3ViPMV3jSc5bFlsugQs2Sm9Dj17LiKOMFLWtOciuPiY7VAS+rM0Yy6E3bYv395UYBOsgsG9KUNcuTjguSQ4CR+2et02wC6lYmcHJEXeQE/EVeZPC586rDmpeNkCzOX88WVM+uWU5oJ1gutFKVKXJbbe9AGaZ44qCiQK+GCJPlpiooC+qgAg5++tkGMavJqXFOuQ7eBh/OCWHGZhgl031x9O4SOk5QxMU+xIzQLlIMB9b6NCMGxXzQ6ljHMnT2ukLCHpAADD4YFurSBiyrsoAYPqOnSHYosMbG6/3m2UMZbNyr5hvI+iV+vcJ27HmfbnZt+r4duunSHuenTkLnp0Y5tO/0eizwI2gBfM9P8800Lz3nGzU1VN1LWKY+y1bMsV/JHVYxf59Gr9ihHLhiQvERtYEMnKNNlEqD4O7ihH507M1Wq8mTKDNctA8Hx3ebQUuTgA+6rp2Dw8D6nhMRt8ISNNGY2Ww60QfTSgrh5eb/LMf1uh+lw/QH3Y/Hl2MgI0/RLjAhogxg2d8Hz029/Pz89/vr89PjH89Pjn89Pj7//8Pz0+Mt186+GwNWdBtpFBOKwaKrOzDVWqImocHXIdScTXvZ5wW/kf3PzLRavbZfuTGbWt60h7Mz5HCbqYrvakqGJWUlUWJnVDM3OxBgZVHL/LyBgAFyanPH5LDr8frZRpvxCby26y0VQJGExpqWxmMq8UU8yOSuN6Wru1x6zMDIv9o+J5NY1rVu83d16nJ9FWPb1yWwep4J+31R77aqPxcp0M1JWuwMfq1bWQWXmo7R/2nBzXTFaEku5SceJjPg46xJKhrt+LbQUp8Ps5MVWxjyrjaK+ZymVxssjZrOaK0inKP8a2JeBEV4HNX6J0sO1Bz2MXube1Z//cPE9DNSl/QHhOke/0XBDuLbIwVvT/JqcfZXJhAMzXmu6lZRGLSBzblImc7dXOoGrgsvlaxukISRekkdgAIrIbhITwoLw72Fe4ggVBEYpGNBcl6YYjqXoNohOfJqaBJK3GQD45hslIrj8A36b4kYfCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "~_𝐃𝐚𝐬𝐮𝐧 𝐌𝐚𝐱💔_~",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "~_𝐃𝐚𝐬𝐮𝐧 𝐌𝐚𝐱💔_~",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'ᴅᴜʟʟᴀʜ-xᴍᴅ v²',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/533oqh.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
                 ANTIDELETE3 : process.env.ANTIDELETE2 || 'yes',
                  DULLAH_CHATBOT : process.env.DULLAH_CHATBOT || 'yes',
                
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
                  AUTO_TAG_STATUS : process.env.AUTO_TAG_STATUS || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
