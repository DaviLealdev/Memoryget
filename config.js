const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () =>{

    mainWindow = new BrowserWindow({
        center: true,
        fullscreen:true,
        resizable:true

    })

    mainWindow.loadURL(`file://${__dirname}/index.html`)

})