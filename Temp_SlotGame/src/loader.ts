import {Loader, LoaderResource, Texture} from "pixi.js"
import assests from "./asset.json";

export class LoaderExam{
    private loa: Loader;
    private static resources: {[key: string]: LoaderResource}

    constructor(){
        this.loa = new Loader();

        assests.forEach(e => {
            this.loa.add(e.asset, e.path)
        });

        LoaderExam.resources = this.loa.resources
    }

    start(): void{
       Object.keys(LoaderExam.resources).forEach((e) => {
        console.log(e + " => " + LoaderExam.resources[e].url)
       })
    }

    
}