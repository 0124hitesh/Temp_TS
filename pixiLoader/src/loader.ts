import {Loader, LoaderResource, Texture} from "pixi.js"
import assests from "./asset.json";

export class LoaderExam{
    private loa: Loader;
    private static resources: {[key: string]: LoaderResource}

    constructor(){
        this.loa = new Loader();

        assests.forEach((e: any) => {
            this.loa.add(e.asset, e.path)
        });

        LoaderExam.resources = this.loa.resources
        // this.loa.onComplete.add((e) => {
        //     LoaderExam.resources = e.resources
        // })
    }

    start(): void{
    //    console.log(typeof LoaderExam.resources)
       Object.keys(LoaderExam.resources).forEach((e) => {
        // console.log(e, LoaderExam.resources[e])
        console.log(e + " => " + LoaderExam.resources[e].url)
       })
    }

    
}