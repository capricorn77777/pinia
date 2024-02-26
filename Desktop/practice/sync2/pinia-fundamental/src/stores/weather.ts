import {defineStore} from "pinia";

export interface City {
    name: string;
    q: string;
} 

interface State {
    cityList: Map<string, City>;
    selectedCity: City;
    isLoading: boolean;
    weatherDescription: string;
}

function setupOnUpgradeNeeded(database: IDBDatabase) {
    request.onupgradeneeded = (event) => {
        const target = event.target as IDBRequest;
        const db = target.result as IDBDatabase;
        console.log("Creating object store...");
        db.createObjectStore("members", { keyPath: "id" });
    }
}

export const useWeatherStore = defineStore({
    id: "weather",
    state: (): State => {
        return {
            cityList: new Map<string, City>(),
            selectedCity: {
                name: "",
                q: ""
            },
            isLoading: true,
            weatherDescription: ""
        };
    },
    getters: {

    },
    actions: {
        prepareCityList() {
            this.cityList.set("Osaka",
            {
                name: "大阪",
                q: "Osaka"
            });
            this.cityList.set("Kobe",
            {
                name: "神戸",
                q: "Kobe"
            });
            this.cityList.set("Himeji",
            {
                name: "姫路",
                q: "Himeji"
            });
        },
        async recieveWeatherInfo(id: string) {
            this.selectedCity = this.cityList.get(id) as City;
            //ウェブアクセスコード
            const WeatherInfoUrl = "http:/api.openweathermap.org/data/2.5/weather";
            //クエリパラメーターのもととなるオブジェクトリテラルを用意
            const params:{
                lang: string,
                q: string,
                appId: string
            } =
            {
                lang:"ja",
                q: this.selectedCity.q,
                appId: "b3dd577445b2202221b6a7bf0a2cf127"
            }

            const queryParams = new URLSearchParams(params);
            const urlFull = `${WeatherInfoUrl}?${queryParams}`;
            const response = await fetch(urlFull);
            const weatherInfoJSON = await response.json();
            //
            const weatherArray = weatherInfoJSON.weather;
            const weather = weatherArray[0];
            this.weatherDescription = weather.description;

            this.isLoading = false;
        }      
    }

});