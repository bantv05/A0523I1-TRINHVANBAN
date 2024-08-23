import request from '../http-common';

const findAll = () => {
  return request.get('/students')
}

const save = (student) => {
    return request.post('/students', student)
}

const studentService = {
    findAll,
    save
}

export default studentService;
