const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            URL: "https://swapi.dev/api",
            people: [],
            planets: [],
            starships: [],
            favorites: []
        },
        actions: {
            fetchURL: async (URL) => {
                let headersList = {
                    "Content-Type": "application/json"
                }

                let response = await fetch(URL, {
                    method: "GET",
                    headers: headersList
                });
                

                let data = await response.json();
                return data
            },    

            setCharList: (list) => {
                setStore({
                    people: list
                })
            },
            setPlanList: (list) => {
                setStore({
                    planets: list
                })
            },
            setShipList: (list) => {
                setStore({
                    starships: list
                })
            },
        }
    }
}

export default getState;