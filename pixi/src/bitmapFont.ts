import {Application, BitmapText   } from "pixi.js"

const app = new Application({ backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

app.loader
    .add('desyrel', 'https://pixijs.io/examples/examples/assets/bitmap-font/desyrel.xml')
    .load(onAssetsLoaded);

function onAssetsLoaded() {
    const bitmapFontText = new BitmapText('bitmap fonts are supported!\nWoo yay!', { 
        fontName: 'Desyrel', fontSize: 55, align: 'left' 
    });

    bitmapFontText.x = 50;
    bitmapFontText.y = 200;

    app.stage.addChild(bitmapFontText);
}