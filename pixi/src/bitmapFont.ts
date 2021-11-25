import {Application, BitmapText, Graphics} from "pixi.js"

const app = new Application({ 
    backgroundColor: 0x1099bb,
    width: 1200,
    height: 600
 });
document.body.appendChild(app.view);

app.loader
    .add('desyrel', 'https://pixijs.io/examples/examples/assets/bitmap-font/desyrel.xml')
    .load(onAssetsLoaded);

function onAssetsLoaded() {
    const bfm = new BitmapText('Bitmap Fontttttttttttttttttt!', { 
        fontName: 'Desyrel', 
        fontSize: 55, 
        align: 'left' 
    });

    bfm.x = 50;
    bfm.y = 200;

    app.stage.addChild(bfm);

    const g = new Graphics();
    g.beginFill(0xffffff, 1)
    g.drawRect(50, 50, 200, 200)
    g.endFill();
    g.x = 0
    g.y = 0
    app.stage.addChild(g)

    const cir = new Graphics();
    cir.beginFill(0xDE3249, 1);
    cir.drawCircle(300, 300, 50);
    cir.endFill();
    app.stage.addChild(cir)

    app.stage.interactive = true
    // Interaction --  https://pixijs.io/examples/#/interaction/interactivity.js

    app.stage.on("pointerdown", (e: any) => {
        app.stage.on("pointermove", showOnMove)
        bfm.mask = g;
        cir.mask = g
        showOnMove(e)
    })

    function showOnMove(e: any){
        g.x = e.data.global.x - 150;
        g.y = e.data.global.y - 150;
    }

    // app.stage.on("pointerup", () => {
    //     app.stage.off('pointermove', showOnMove)

    //     bfm.mask = null;
    //     g.x = 50
    //     g.y = 200
    // })
}