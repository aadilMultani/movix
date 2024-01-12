import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"

const TMDB_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjE4MWUxNjFkZjc0OGZmOWZkYjVkZmYxNWQxM2JhNyIsInN1YiI6IjY1OThlZThjMWQxYmY0MDA5NzFhOTVhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOfY1QPnkbXVRvKxMzmesGpX_hedVjjwgzUpfokBeyc';

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDatafromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params
        });
        return data;

    } catch (err) {
        console.log(err);
        return err;
    }
}