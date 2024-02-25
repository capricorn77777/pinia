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

export const useWeatherStore = defineStore({
    id: "weather",
    state: (): State => {
        return {
            cityList: new Map<string, City>(),
            selectedCity: {
                name: "",
                q: ""
            }
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
            this.cityList.set("Kobe",
            {
                name: "姫路",
                q: "Himeji"
            });
        },
        async recieveWeatherInfo(id: string) {
            this.selectedCity = this.cityList.get(id) as City;
            //ウェブアクセスコード
        }      
    }

});