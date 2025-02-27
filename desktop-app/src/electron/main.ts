import {app, BrowserWindow} from 'electron';
import path from 'path';
import { isDev } from './util.js';

app.on("ready", () => {
    const mainWindow = new BrowserWindow({});
    if (isDev()) {
        const port = process.env.LOCAL_PORT;
        if (port) {
            mainWindow.loadURL(`http://localhost:${port}`)
        } else {
            mainWindow.loadURL('http://localhost:7777')
        }
    } else {
        mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"))
    }
})