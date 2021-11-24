import {Application, BitmapText, Sprite, NineSlicePlane, Texture    } from "pixi.js"

const app = new Application({
    width: 1200,
    height: 800,
    resolution: 1,
    antialias: true
})

document.body.appendChild(app.view)

app.loader.load((l, r) => {
    // default value new NineSlicePlane(Texture.from(), 10, 10, 10, 10)
    // last 4 parameters are optional
    const ns = new NineSlicePlane(Texture.from("https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg"),
    30, 30, 30, 10
    )

    ns.position.set(10, 10);
    ns.width = 500
    ns.height = 400
    app.stage.addChild(ns)
    
})