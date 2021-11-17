export class Weather{

    private readonly head = new Headers({
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '74e9a8130emshe9a017494aba03cp15b47djsn7d6cdf23cacc'
    })

    private readonly url0 = "https://community-open-weather-map.p.rapidapi.com/find?q=";
    private readonly url1 = "&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric"

    public async getDataa(city: string): Promise<any>{
        const res = await fetch("https://community-open-weather-map.p.rapidapi.com/find?q=london&cnt=0&mode=null&lon=0&type=link%2C%20accurate&lat=0&units=imperial%2C%20metric", {
            method: "GET",
            headers: this.head,
        })

        return res.json();
    }
}