/**
 * @file directMessageHandler
 * @author Abdulrahman Hejazi (LazySano)
 * @license MIT
 */

/**
 * Handles direct messages sent to Bastion
 * @param {Message} message Discord.js message object
 * @returns {void}
 */
module.exports = message => {
  let prefix = message.client.config.prefix;

  if (message.content.startsWith(prefix)) {
    let args = message.content.split(' ');
    let command = args.shift().slice(prefix.length).toLowerCase();

    if (command === 'help' || command === 'h') {
      return message.channel.send({
        embed: {
          color: message.client.colors.BLUE,
          title: 'Zerotwo',
          url: 'https://facebook.com/lazySano',
          description: 'لتستمع معنا [**Mirai**](https://discord.gg/aP2PmBb) إنضم إلى سيرفر',
          fields: [
            {
              name: 'Zerotwo رابط السيرفر الخاص بـ',
              value: 'https://discord.gg/aP2PmBb'
            },
            {
              name: 'Zerotwo رابط دعوة البوت إلى السيرفر الخاص بك',
              value: `https://discordapp.com/oauth2/authorize?client_id=${message.client.user.id}&scope=bot&permissions=805314622`
            }
          ],
          thumbnail: {
            url: message.client.user.displayAvatarURL
          },
          footer: {
            text: 'developed with ❤ by Abdulrahman Hejazi (LazySano)'
          }
        }
      }).catch(e => {
        message.client.log.error(e);
      });
    }
  }
};
