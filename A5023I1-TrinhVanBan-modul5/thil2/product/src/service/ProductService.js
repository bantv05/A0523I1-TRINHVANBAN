import axios from "axios";

export const getAllOrder = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/order')
        return temp.data
    }catch (e){
        console.log(e + "error");
    }
}

export const getAllProduct = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/product?_sort=name')
        return temp.data
    }catch (e){
        console.log(e);
    }
}
export const saveOrder = async (value) => {
    try{
        await axios.post('http://localhost:8000/order', value)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

export const deleteOrder = async (id) => {
    try{
        await axios.delete('http://localhost:8000/order/'+ id)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

export const getByIdOrder= async (id) => {
    try {
        const response = await axios.get(`http://localhost:8000/order/`+id);
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const updateOrder = async (id, value) => {
    try {
        await axios.put(`http://localhost:8000/order/`+id, value)
            .catch(err => console.log(err));
    } catch (e) {
        console.log(e);
    }
};
