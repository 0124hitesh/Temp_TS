import {Loader, LoaderResource, Texture, Rectangle} from 'pixi.js'


export class LoaderExam{
    private readonly loa: Loader

    private readonly loaDiv: HTMLDivElement; 

    constructor(){
        this.loa = new Loader();  

        // ON_PROGRESS
        // show progress bar
        this.loaDiv = document.getElementById('loader') as HTMLDivElement ;
        this.loa.onProgress.add((e) => {
          this.progressss(e.progress) 
        })

        // ON_COMPLETE
        this.loa.onComplete.add(() => {
            this.loaDiv.style.background = "green"
        })
    }

    private progressss(p: number):  void {
        this.loaDiv.style.width = `${p*100}%`
    }

    start(cb:(l:Loader, r:any) => void):void {
        this.loa.add('a', "https://image.shutterstock.com/image-illustration/beautiful-anime-boy-character-background-260nw-1986627173.jpg")
        this.loa.load(cb);
    }
}


