const { ipcMain } = require('electron')

ipcMain.on('meuPrograma', (event, arg) => {
    console.log(arg)

    event.reply('meuPrograma', 'pong')
})