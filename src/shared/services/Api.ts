export default class {
    public static getMovies(search: string, searchBy: string, sortBy: string) {
        return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${search}&searchBy=${searchBy}&sortBy=${sortBy}&sortOrder=desc`)
            .then(response => response.json())
            .then(json => json.data);
    }
}
