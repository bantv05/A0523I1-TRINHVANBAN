import axios from "axios";

export const getAllStudent = async () => {

    try {
        const temp = await axios.get("http://localhost:8080/classrooms");
        return temp.data;
    } catch (e) {
        return [];
    }

};
