require('isomorphic-fetch');

export default class {
    public static getMovies(search: string, searchBy: string, sortBy: string) {
        const sortByFixed = sortBy === 'rating' ? 'vote_average' : 'release_date';
        return fetch(`http://react-cdp-api.herokuapp.com/movies?search=${search}&searchBy=${searchBy}&sortBy=${sortByFixed}&sortOrder=desc`)
            .then(response => response.json())
            .then(json => json.data);
    }

    public static getMovie(id: string) {
        return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`)
            .then(response => response.json());
    }
}
