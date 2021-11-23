import { Application, Sprite, Rectangle } from "pixi.js";

const app = new Application({
    width: 1000,
    height: 1000,
    resolution: 1,
    antialias: true
});

document.body.appendChild(app.view)

const t: Sprite[] =[]
const count = 10;

app.loader.add('a', "https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg")
.add('b', "https://cdn.vox-cdn.com/thumbor/7koeuy8-o1IztfPtP42ltVRySi0=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19661987/acastro_190807_3592_best_anime_2019_0001__1_.jpg")
.load((l, r) => {
    for(let i=0; i<count; ++i){

        //  if dont want to use "any" in img.direction --
        // const img = new Temp(r["c"].texture)

        const img = new Sprite(r["b"].texture)
        img.anchor.set(.5);
        img.scale.set(.8 + Math.random()*0.3)

        img.x = Math.random() * app.screen.width;
        img.y = Math.random() * app.screen.height;

        img.tint = Math.random() * 0xFFFFFF;

        // img.direction = Math.random() * Math.PI * 2; -- gives error in typescript
        (<any>img).direction = Math.random() * Math.PI * 2;
        (<any>img).turningSpeed = Math.random() - 0.8;
        (<any>img).speed = 2 + Math.random() * 2;

        t.push(img);
        app.stage.addChild(img);
    }
});

const imgBoundsPadding = 100;
const imgBounds = new Rectangle(-imgBoundsPadding,
    -imgBoundsPadding,
    app.screen.width + imgBoundsPadding * 2,
    app.screen.height + imgBoundsPadding * 2);


// ticker -- call function 60 times in a second
app.ticker.add(() => {
    // iterate through the images and update their position
    for (let i = 0; i < t.length; i++) {
        const img = t[i];
        (<any>img).direction += (<any>img).turningSpeed * 0.01;
        img.x += Math.sin((<any>img).direction) * (<any>img).speed;
        img.y += Math.cos((<any>img).direction) * (<any>img).speed;
        img.rotation = -(<any>img).direction - Math.PI / 2;

        if (img.x < imgBounds.x) {
            img.x += imgBounds.width;
        } else if (img.x > imgBounds.x + imgBounds.width) {
            img.x -= imgBounds.width;
        }

        if (img.y < imgBounds.y) {
            img.y += imgBounds.height;
        } else if (img.y > imgBounds.y + imgBounds.height) {
            img.y -= imgBounds.height;
        }
    }
});


// class Temp extends Sprite{
//     public direction: number;
//     public turningSpeed: number;
//     public speed: number
// }