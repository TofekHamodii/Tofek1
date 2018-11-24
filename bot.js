const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`Start ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
	
});


client.on('message', message => {
    if (message.content === "-server") {
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(message.guild.iconURL)
    .setTitle(`info about ${message.guild.name}`)
    .addField(' 🆔 Server ID',`➥` + message.guild.id, true)
    .addField(" 👑 Owned by",`➥ ${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField(" 🌍 Server Region",`➥ ` + message.guild.region, true)
    .addField(" 👥 Server Member Size",`➥ ` + message.guild.memberCount, true)
    .addField(' 💬 Channels ', `➥ **${message.guild.channels.filter(m => m.type === 'text').size}** + ' text | Voice  '+ **${message.guild.channels.filter(m => m.type === 'voice').size}**`,true)
    .addField(" 🔐 Roles ", `➥ ${message.guild.roles.size} Role`,true)
    .addField(" 📅 Created On", `➥ ${message.guild.createdAt.toLocaleString()}`,true)
    .addField(" 💤 AFK channel",`➥ ` + message.guild.afkChannel || 'Null', true)
    .setTimestamp()
    .setFooter(message.author.tag, message.author.avatarURL)
    
    
    message.channel.sendEmbed(embed);
    }
    });

client.login(process.env.BOT_TOKEN); 
