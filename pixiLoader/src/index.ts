// import {Loader, Texture} from "pixi.js"

// const loa = new Loader();

// const a = <HTMLElement>document.getElementById('progress')
// loa.onProgress.add((e) => {
//   a.style.width = `${e.progress}%`;
//   console.log(e.progress)
// })

// loa.add("song", "../assets/[Songs.PK] Barfi - 03 - Kyon.mp3")
// .add("css", "../assets/CSS.css")
// .add("img", "../assets/z.jpg")
// .load()

import {LoaderExam} from './loader'

const l = new LoaderExam();
l.start()