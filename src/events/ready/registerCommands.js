const areCommandsDifferent = require('../../utils/areCommandsDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async (client) => {
    try {
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(client);
        
        for (const localCommand of localCommands) {
            const { name, description, options, deleted } = localCommand;
            const existingCommand = await applicationCommands.find((cmd) => cmd.name === name);

            if (existingCommand) {
                if (deleted) {
                    await existingCommand.delete();
                    console.log(`Deleted command "${name}".`);
                    continue;
                }

                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                        permissionsRequired,
                    });

                    console.log(`Edited command "${name}".`);
                }
            } else {
                if (localCommand.deleted) {
                    await applicationCommands.delete();
                    console.log(`Skipping registering command "${name}" as it's set to delete.`);
                    continue;
                }

                await client.application.commands.create({ name, description, options });

                console.log(`Registered command "${name}."`);
            }
        }
    } catch (error) {
        console.log(error);
    }
};
