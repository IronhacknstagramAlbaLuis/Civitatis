import http from './base-api'

 const create = (user) =>  http.post('/users', user)
 .then((res) => res.user)







export default {
  create

}