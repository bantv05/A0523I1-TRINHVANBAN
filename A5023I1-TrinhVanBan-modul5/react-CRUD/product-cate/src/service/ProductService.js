import axios from "axios";

export const getAllProducts = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/product?_sort=quality&_order=desc')
        return temp.data
    }catch (e){
        console.log(e + "error");
    }
}

export const getAllCates = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/category')
        return temp.data
    }catch (e){
        console.log(e);
    }
}
export const saveProduct = async (value) => {
    try{
        await axios.post('http://localhost:8000/product', value)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

export const deleteProduct = async (id) => {
    try{
        await axios.delete('http://localhost:8000/product/'+ id)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

export const getByIdProduct = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/product/`+id);
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const updateProduct = async (id, value) => {
    try {
        await axios.put(`http://localhost:8000/product/`+id, value)
            .catch(err => console.log(err));
    } catch (e) {
        console.log(e);
    }
};
