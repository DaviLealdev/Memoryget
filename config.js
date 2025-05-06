const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('ready', () =>{
    
    mainWindow = new BrowserWindow({
        show: false,
        frame:true

    })
    mainWindow.maximize();
    mainWindow.show()
    mainWindow.removeMenu();

    mainWindow.loadURL(`file://${__dirname}/index.html`)

})