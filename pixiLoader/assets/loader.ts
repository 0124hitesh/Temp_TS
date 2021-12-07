import {Loader, LoaderResource, Texture, Rectangle} from 'pixi.js'


export class LoaderExam{
    private readonly loa: Loader

    private readonly loaDiv: HTMLDivElement; 
    private static resources: {[key: string]: LoaderResource} 

    public static get_Resources(name: string):LoaderResource{
        return this.resources[name]
    }

    public static get_Texture(name: string):Texture{
        return this.resources[name].texture
    }

    // --------------------------------------------------------------------------------------------------------
    // to get certain part of image by giving frame value
    // let img = new Sprite(LoaderExam.getTextureFromAtlas('imagePath', new Rectangle(0, 0, x, y)))
    public static getTextureFrom_SpriteSheet(name: string, frame: Rectangle): Texture{
        const bt = this.resources[name].texture.baseTexture;
        return new Texture(bt, frame)
    }

    public static getTextureSSFrom_SpriteSheet(name: string, frames: Rectangle[]): Texture[]{
        const bt = this.resources[name].texture.baseTexture;
        let textureArray: Texture[] = [];

        frames.forEach((f) => {
            textureArray.push(new Texture(bt, f))
        })

        return textureArray;
    }
    // ------------------------------------------------------------------------------------------------------------

    constructor(){
        this.loa = new Loader();  

        // ON_PROGRESS
        // show progress bar
        this.loaDiv = document.getElementById('loader') as HTMLDivElement ;
        this.loa.onProgress.add((e) => {
          this.progressss(e.progress) 
        })

        // ON_COMPLETE
        this.loa.onComplete.add((e) => {
            this.loaDiv.style.background = "green"
            LoaderExam.resources = e.resources
        })
    }

    private progressss(p: number):  void {
        this.loaDiv.style.width = `${p}%`
    }

    start(cb:(l:Loader, r:any) => void):void {
        this.loa.add('a', "https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg")
        this.loa.load(cb);
    }
}


