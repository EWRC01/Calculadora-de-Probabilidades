const { app, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path= require('path');
const { electron } = require('process');
if (process.env.NODE_ENV !== 'production'){
require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')

})
}

let mainWindow
let newProductWindow
let newClassic
let newBinomial
let newHiper
let newMultinomial
let newPoisson
let newIndex
app.on('ready', () => {
   mainWindow = new BrowserWindow({
    width: 1437,
    height: 637,
    maxWidth: 1437,
            maxHeight: 637,
            minWidth: 1437,
            minHeight: 637,
    
   });
   mainWindow.loadURL(url.format({
       pathname: path.join(__dirname, 'views/index.html'),
       protocol: 'file',
       slashes: true
   }))

   const mainMenu= Menu.buildFromTemplate(templateMenu);
   Menu.setApplicationMenu(mainMenu);
   mainWindow.on('closed', () => {
       app.quit();

   });
});
function createNewIndex() {
    newIndex = new BrowserWindow({
        width: 1437,
        height: 637,
        title: 'Home'
        
    }) ;
    newIndex.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    newIndex.on('closed', () => {
        newIndex = null
    })
    
}
function createNewProductWindow() {
   
   newProductWindow =  new BrowserWindow({
       width: 400,
       height: 330,
       title: 'Add a new menu'
   });
   newProductWindow.setMenu(null)
   newProductWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'views/menu.html'),
    protocol: 'file',
    slashes: true
}))
newProductWindow.on('closed', () => {
    newProductWindow = null;
    
});
}
//Crear ventana probabilidad clasica
function createClassic() {
    
        newClassic = new BrowserWindow({
            width: 400,
            height: 330,
            maxWidth: 400,
            maxHeight: 330,
            minWidth: 400,
            minHeight: 330,
            title: 'Probabilidad clasica'
        });
        newClassic.setMenu(null)
        newClassic.loadURL(url.format({
            pathname: path.join(__dirname, 'views/classic.html'),
            protocol: 'file',
            slashes: true
        }))
        newClassic.on('closed', () =>{
            newClassic = null
        });
    
}
//Crear ventana Probabilidad Binomial
function createBinomial() {
    newBinomial = new BrowserWindow({
        width: 381,
        height: 562,
        minWidth: 381,
        minHeight: 562,
        maxWidth: 381,
        maxHeight: 562,
        title: 'Probabilidad Binomial'
    });
   // newBinomial.setMenu(null)
   newBinomial.setMenu(null)
    newBinomial.loadURL(url.format({
        pathname: path.join(__dirname, 'views/binomial.html'),
        protocol: 'file',
        slashes: true
    }))
    newBinomial.on('closed', () =>{
        newBinomial = null
    });
    
}

//Crear ventana Hipergeometrica
function createHipergeometrica() {
    newHiper = new BrowserWindow({
        width: 584,
        height: 527,
        minWidth: 584,
        minHeight: 527,
        maxWidth: 584,
        maxHeight: 527,
        title: 'Distribucion Hipergeometrica'
    });
    newHiper.setMenu(null)
    newHiper.loadURL(url.format({
        pathname: path.join(__dirname, 'views/hiper.html'),
        protocol: 'file',
        slashes: true
    }))
    newHiper.on('closed', () => {
        newHiper=null
    })
    
}
//Crear ventana Multinomial
function createMultinomial() {
    newMultinomial = new BrowserWindow({
        width: 568,
        height: 758,
        minWidth: 568,
        minHeight: 758,
        maxWidth: 568,
        maxHeight: 758,
       
        title: 'Distribucion Multinomial'
    });
    newMultinomial.setMenu(null)
    newMultinomial.loadURL(url.format({
        pathname: path.join(__dirname, 'views/multinomial.html'),
        protocol: 'file',
        slashes: true
    }))
    newMultinomial.on('closed', () => {
        newMultinomial= null
    })
}
//Crear ventana Poisson
function createPoisson() {
    newPoisson = new BrowserWindow({
        width: 571,
        height: 598,
        minWidth: 571,
        minHeight: 598,
        maxWidth: 571,
        maxHeight: 598,
        title: 'Distribucion de Poisson'
    });
    newPoisson.setMenu(null)
    newPoisson.loadURL(url.format({
        pathname: path.join(__dirname, 'views/poisson.html'),
        protocol: 'file',
        slashes: true
    }))
    newPoisson.on('closed', () => {
        newPoisson= null
    })
}
const templateMenu= [
{
    label: 'Menu',
    submenu: [
        {
            label: 'Probabilidad Clasica',
            accelarator: 'Ctrl+P',
            click() {
                createClassic();
                
    
            }
    
        },
        {
            label: 'Distribucion Binomial',
            accelarator: 'Ctrl+B',
            click() {
                createBinomial();
    
            }
    
        },
        {
            label: 'Distribucion Hipergeomtrica',
            accelarator: 'Ctrl+H',
            click() {
                createHipergeometrica();
            }
    
        },
        {
            label: 'Distribucion Multinomial',
            accelarator: 'Ctrl + M',
            click() {
                createMultinomial()
            }
    
        },
        {
            label: 'Distribucion de Poisson',
            accelarator: 'Ctrl + P',
            click() {
                createPoisson()
            }
    
        },
        {
            label: 'Home',
            accelarator: 'Ctrl + H',
            click() {
            createNewIndex();
            }
        },
        
        {
            label: 'Exit',
            accelarator: 'Esc',
            click() {
                app.exit();
            }
        }
        
     ]
    }
    
     
    
    
];

if(process.env.NODE_ENV !== 'production') {
    templateMenu.push({
        label: 'DevTools',
        submenu: [
            {
                label: 'Show/Hide Dev Tools',
                click(item, focusedWindow) {
                    focusedWindow.toggleDevTools();
                }
            },
            {
                label:'Restart',
                role: 'reoload'
            }
        ]
    })
}
