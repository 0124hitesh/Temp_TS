import {Application, Sprite} from 'pixi.js';

const app = new Application({
    width: 600,
    height: 600,
    resolution: 1,
    antialias: true
})

document.body.appendChild(app.view);

app.loader.add('a', "../assets/download.jpg")
.load((l, r) => {
    const img = new Sprite(r.a.texture)
    img.pivot.set(app.screen.width / 2, app.screen.width / 2);
    img.position.set(200, 500);
    app.stage.addChild(img);

})

