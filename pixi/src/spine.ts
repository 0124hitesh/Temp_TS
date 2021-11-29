import { SpineParser } from "@pixi-spine/loader-3.8";
import { Application} from "pixi.js";
import {Spine} from 'pixi-spine'

const app = new Application({
    width: 1200,
    height: 600,
    resolution: 1, 
    antialias: true
})

document.body.appendChild(app.view)

app.loader.add("spineHero", "../assets/spine-hero/hero.json")
.load((l, r) => {
    const sh = new Spine(r["spineHero"].spineData)
    sh.position.set(200, 400)
    sh.state.setAnimation(5, "idle", true)
    app.stage.addChild(sh)

    var loop: boolean = true;
    window.onkeydown = (e) => {
        
        if(loop){
            if(e.key == "ArrowUp"){
                sh.state.setAnimation(5, "attack", true)
                loop = false
            }
            else if(e.keyCode === 16){
                sh.state.setAnimation(5, "run", true)
                loop = false
            }
        }
    }
    window.onkeyup = (e) => {
        loop = true;
        sh.state.setAnimation(5, "idle", true);
    }

})