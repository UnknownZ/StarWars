const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            URL: "https://swapi.dev/api",
            people: [],
            planets: [],
            starships: [],
            favorites: [],
            storeIndex: ""
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
            setIndex: (index) => {
                const {storeIndex} = getStore();
                setStore({
                    index: index
                })
                console.log(storeIndex)
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
            addFavorite: (favorite) => {
                const {favorites} = getStore();

                if(favorites.includes(favorite)) {
                    getActions().deleteFavorite(favorite);
                }
                else
                setStore({
                    favorites: favorites.concat(favorite)
                })
            },
            deleteFavorite: (favorite) => {
                const {favorites} = getStore();

                setStore({
                    favorites: favorites.filter(f => f != favorite)
                })
            },
        }
    }
}

export default getState;