import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import axios from "../../api/axios";
import "./Search.css"
import {useDebounce} from "../../hooks/useDebounce";

const SearchPage = () => {

    const navigate = useNavigate()
    const [searchResults, setSearchResults] = useState([])
    const useQuery = () => {
        return new URLSearchParams(useLocation().search)
    }

    let query = useQuery()
    const searchTerm = query.get('q')
    const debouncedSearchTerm = useDebounce(searchTerm, 500)

    useEffect(()=>{
        if(debouncedSearchTerm) {
            fetchSearchMovie(debouncedSearchTerm)
        }
    }, [debouncedSearchTerm])

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const res = await axios.get(`/search/multi?include_adult-false&query=${searchTerm}`)
            setSearchResults(res.data.results)
        } catch (error) {
            console.error(error)
        }
    }

    if(searchResults.length > 0) {
        return (
          <section className="search-container">
              {searchResults.map((movie)=>{
                  if(movie.backdrop_path !== null && movie.media_type !== 'person') {
                    const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path

                      return (
                          <div className="movie" key={movie.id}>
                              <div className="movie__column-poster" onClick={()=> navigate(`/${movie.id}`)}>
                                  <img src={movieImageUrl} alt="movie" className="movie__poster"/>
                              </div>
                          </div>
                      )
                  }
              })}
          </section>
        )
    } else {
        return (
            <section className="no-result">
                <div className="no-result__text">
                    <p>
                        찾고자하는 검생어 "{searchTerm}" 에 맞는 영화가 없습니다.
                    </p>
                </div>
            </section>
        )

    }

};

export default SearchPage;