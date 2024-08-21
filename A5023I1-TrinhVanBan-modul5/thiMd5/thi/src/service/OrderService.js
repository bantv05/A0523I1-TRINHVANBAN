export const getAllCates = async () =>{
    try{
        const temp = await axios.get('http://localhost:8000/category')
        return temp.data
    }catch (e){
        console.log(e);
    }
}