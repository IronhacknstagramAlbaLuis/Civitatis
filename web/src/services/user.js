import http from './base-api'

 const create = (user) =>  http.post('/users', user)
 .then((res) => res.user);

const login = (user) => http.post('/login', user)
.then((res) => res.data);

const get = (id) => http.get(`/users/${id}`)
.then((res)=> res.data)


export default {
  create,
  login,
  get

}