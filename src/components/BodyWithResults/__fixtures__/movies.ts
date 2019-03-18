import { Movie } from '../../../App';

const movies: Movie[] = [{
    poster_path: 'https://image.tmdb.org/t/p/w500/97fNAi62HawGjWru7PvVmF7RAbU.jpg',
    title: 'Kill Bill: Vol. 1',
    tagline: 'Go for the kill.',
    release_date: '2003-10-10',
    vote_average: 7.8,
    runtime: 111,
    overview: 'An assassin is shot at the altar by her ruthless employer, ' +
        'Bill and other members of their assassination circle – but \'The Bride\' ' +
        'lives to plot her vengeance. Setting out for some payback, she makes a death ' +
        'list and hunts down those who wronged her, saving Bill for last.',
    genres: [
        'Action',
        'Crime',
    ],
}, {
    poster_path: 'https://image.tmdb.org/t/p/w500/au9lFA5a2ZnBKCzPbZQf00r7J64.jpg',
    title: 'Kill Bill: Vol. 2',
    tagline: 'The bride is back for the final cut.',
    release_date: '2004-04-16',
    vote_average: 7.7,
    runtime: 136,
    overview: 'The Bride unwaveringly continues on her roaring rampage of revenge against ' +
        'the band of assassins who had tried to kill her and her unborn child. She visits ' +
        'each of her former associates one-by-one, checking off the victims on her Death List ' +
        'Five until there\'s nothing left to do … but kill Bill.',
    genres: [
        'Action',
        'Crime',
        'Thriller',
    ],
}];

export default movies;
