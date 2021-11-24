import {Application, BitmapText, Sprite} from 'pixi.js';

const app = new Application({
    width: 1200,
    height: 500,
    resolution: 1,
    antialias: true
})

document.body.appendChild(app.view)

app.loader.add('a', "../assets/download.jpg")
.load((l, r) => {
    const img = new Sprite(r['a'].texture);
    img.position.set(10, 10)

    app.stage.addChild(img)
})