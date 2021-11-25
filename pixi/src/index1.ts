import {Application, Sprite} from 'pixi.js';

const app = new Application({
    width: 600,
    height: 600,
    resolution: 1,
    antialias: true
})

document.body.appendChild(app.view);

// app.loader.add('a', "https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg")

app.loader.add('a', "../assets/download.jpg")
.load((l, r) => {
    const img = new Sprite(r.a.texture)
    // img.anchor.set(0, 0)
    img.pivot.set(app.screen.width / 2, app.screen.width / 2);
    img.position.set(200, 100);
    app.stage.addChild(img);

    app.ticker.add((delta) => {
        // img.rotation += .05;
        img.rotation += Math.PI / 200 * delta;
    })
})

