import {Application, BitmapText, Sprite, Container} from 'pixi.js';

const app = new Application({
    width: 1200,
    height: 500,
    resolution: 1,
    antialias: true
})

document.body.appendChild(app.view)

const con = new Container();
app.stage.addChild(con);

app.loader.add('a', "https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg")
.load((l, r) => {
    const img = new Sprite(r['a'].texture);
    img.position.set(10, 10)

    con.addChild(img)
})