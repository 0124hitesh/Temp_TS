import { Application, Graphics, Text } from "pixi.js";

window.addEventListener("load", () => {
    const app = new Application({
        width: 600,
        height: 600,
        antialias: true,
        // resolution: 2,
        view: document.getElementById('can') as HTMLCanvasElement,
    })

    const g = new Graphics();
    app.stage.addChild(g)
    g.beginFill(0x03fce3);
    g.drawRect(0, 0, 100, 100);
    g.endFill();

    g.beginFill(0x00ff00);
    // x, y, radius
    g.drawCircle(150, 50, 50);
    g.endFill();

    g.beginFill(0x0000ff);
    // x, y, width, length
    g.drawEllipse(250, 50, 50, 60);
    g.endFill();

    // lineWidth, color, color-alpha
    g.lineStyle(5, 0xffff00, 10);
    g.moveTo(0, 0);
    g.lineTo(400, 100);
    g.lineTo(0, 200);
    g.lineTo(0, 0);
    g.closePath();

    g.lineStyle(20);
    g.beginFill(0xffffff, 0.25);
    // x, y, width, height, border-radius
    g.drawRoundedRect(450, 50, 100, 100, 30);
    g.endFill();

    const text = new Text("Helloo")
    text.x = app.screen.width/2
    text.y = app.screen.height/2
    text.anchor.set(.5);
    text.style.fill = 0xff0000
    text.style.fontSize = 50
    app.stage.addChild(text)

    const g2 = new Graphics()
    app.stage.addChild(g2)
    g2.lineStyle(0);
    g2.beginFill(0xffffff, 0.5);
    g2.drawPolygon([0,0, 500,300, 200,350, 50,250]);
    g2.endFill();

    // The center of rotation, scaling, and skewing for this display object in its local space. 
    g2.pivot.set(app.screen.width / 2, app.screen.width / 2);
    g2.position.set(200, 100);
    app.ticker.add((delta) => {
        g2.rotation += Math.PI / 200 * delta;
    });

})