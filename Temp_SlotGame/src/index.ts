import {Application, Sprite, Container, Resource, LoaderResource, Renderer} from 'pixi.js';
import gsap from 'gsap';

const app = new Application({
    width: 1300,
    height: 590,
    resolution: 1,
    antialias: true
})

document.body.appendChild(app.view);

const arr: string[] = [];
let x=10, y=10, img_y = -190;

let res: {[key: string]: LoaderResource};
app.loader.add("img", "../assets/symbols.json")
.load((l, r) => {
    res = l.resources;

    const ids = r["img"].textures
    for(var i in ids){
        arr.push(i)
    }

    for(let i=0; i<4; ++i){
        const con = createImg(r)
        app.stage.addChild(con)
        
        y = 10;
        con.y = y;
        x += 215;
    }    
})

app.stage.interactive = true;
app.stage.addListener('click',async (e) => {
    const con: Container = app.stage.getChildAt(0) as Container;

    const ind = Math.floor(12*Math.random())
    const img: Sprite = new Sprite((res["img"].textures)[arr[ind]]);
    img.y = -180;
    
    con.addChildAt(img, 0)
    // y = 200;
    spin(con)
})

function spin(con: any): void {
    gsap.to(con, {
      y: 200,
      duration: .05,
    //   ease: "power.InOut",
    //   yoyo: true,
      repeat: 50,
    onRepeat: () => {
    //     console.log(con.y)
    //     y += 200;
        con.removeChildAt(3)
    //     // console.log(con["children"])

        const ind = Math.floor(12*Math.random())
        const img: Sprite = new Sprite((res["img"].textures)[arr[ind]]);
        img.y = -180;


        con.getChildAt(0).y += 200;
        con.getChildAt(1).y += 200;
        con.getChildAt(2).y += 390;
        con.addChildAt(img, 0)

    //     
    //     // console.log(con.y)
    //     // console.log("repeat")
    },
    // onUpdate: () => {

    // },
    // onProgess: () => {
        
    // },
    onComplete: () => {
        console.log("con.y = " + con.y)
        con["children"].forEach((e: any) => {
            e.y += 200
        });
        con.y = 10
     }
    });
  }

function createImg(r: any): Container{
    const con = new Container();
    for(let j=1; j<=3; ++j){
        const ind = Math.floor(12*Math.random())
        const id = (r["img"].textures)[arr[ind]];
        let img = new Sprite(id)

        img.position.set(x, y);
        con.addChild(img);
        y += 190;
    }
    return con;
}


