import axios from "axios";

export const getAllProduct = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/products?_sort=name')
        return temp.data
    }catch (e){
        console.log(e + "error");
    }
}

export const getAllType = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/type')
        return temp.data
    }catch (e){
        console.log(e);
    }
}
export const saveProduct = async (value) => {
    try{
        await axios.post('http://localhost:8000/products', value)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

