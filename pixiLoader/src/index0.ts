import {Application, Sprite} from 'pixi.js'
import { LoaderExam } from '../assets/loader'
import {gsap} from 'gsap';

const app = new Application({
    width: 500,
    height: 500,
    antialias: true,
    resolution: 1,
    sharedLoader: true
})

document.body.appendChild(app.view)

const loader = new LoaderExam()

loader.start((l, r) => {
    // let img = new Sprite(r.a.texture)
    let img = new Sprite(LoaderExam.get_Texture('a'))
    
    app.stage.addChild(img)
    img.x = 100;
    img.y = 100;
    img.anchor.set(.5)
    img.scale.set(.5)

    gsap.to(img, {
        x: 400,
        y: 100, 
        duration: 2
    })
})