import axios from "axios";

export const getFindAllMovie = async () => {
    try{
        const temp = await axios.get('http://localhost:8000/api/v1/movie/private/list-movie')
        return temp.data;
    }catch (e){
        console.log(e + "error");
    }
}
export const getFindAllStatus = async () => {
    try{
        const temp = await axios.get('http://localhost:8000/api/v1/movie/private/list-status-film')
        return temp.data;
    }catch (e){
        console.log(e + "error");
    }
}

export const getFindAllKindOdFilm = async () => {
    try{
        const temp = await axios.get('http://localhost:8000/api/v1/movie/private/list-kind-of-film')
        return temp.data;
    }catch (e){
        console.log(e + "error");
    }
}

export const getBySearch = async () => {
    try{
        const temp = await axios.get('http://localhost:8000/api/v1/movie/private/searches')
        return temp.data;
    }catch (e){
        console.log(e + "error");
    }
}
export const deleteById = async () => {
    try{
        const temp = await axios.put('http://localhost:8000/api/v1/movie/private/delete/{id}')
        return temp.data;
    }catch (e){
        console.log(e + "error");
    }
}
export const deleteByIds = async () => {
    try{
        const temp = await axios.put('http://localhost:8000/api/v1/movie/private/private/list-delete')
        return temp.data;
    }catch (e){
        console.log(e + "error");
    }
}