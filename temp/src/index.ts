import {Weather} from './api'

const wea = new Weather();

    wea.getDataa("london").then((d) =>{
        console.log(d.message)
        // console.log(data.body)
    }).catch(e => {
        console.log(e)
    })

console.log('aaa')