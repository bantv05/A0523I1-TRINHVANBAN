import axios from "axios";

export const getAllOrder = async () =>{
    try{
        const temp = await axios.get('http://localhost:8001/orders?_sort=soLuong&_order=desc')
        return temp.data
    }catch (e){
        console.log(e + "error");
    }
}

export const getAllProduct = async () =>{
    try{
        const temp = await axios.get('http://localhost:8001/products')
        return temp.data
    }catch (e){
        console.log(e);
    }
}
export const saveOrder = async (value) => {
    try{
        await axios.post('http://localhost:8001/orders', value)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

export const deleteOrder = async (id) => {
    try{
        await axios.delete('http://localhost:8001/orders/'+ id)
            .catch(err => console.log(err));
    }catch (e){
        console.log(e);
    }
};

export const getByIdOrder= async (id) => {
    try {
        const response = await axios.get(`http://localhost:8001/orders/`+id);
        console.log(response);
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const updateOrder = async (id, value) => {
    try {
        await axios.put(`http://localhost:8001/orders/`+id, value)
            .catch(err => console.log(err));
    } catch (e) {
        console.log(e);
    }
};

export const searchProduct = async (name = '', type= '') => {
    try {
        const response = await axios.get('http://localhost:8001/orders', {
            params: {
                _sort: 'product.name',
                'product.name_like': name,
                'id_like': type
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const limitTop10 = async () =>{
    try {
        const temp = await axios.get("http://localhost:8001/orders?_sort=product.gia&_order=desc&_limit=5")
        return temp.data;
    }catch (err){
        console.error("error: "+err);
        throw err;
    }
}

