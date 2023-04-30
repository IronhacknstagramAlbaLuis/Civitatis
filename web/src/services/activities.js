
import http from './base-api'

 const list = () =>  http.get('/activities')
 .then((res) => res.data)

 const detail = (id) => http.get(`/activities/${id}`)
  .then((res) => res.data);





export default {
  list,
  detail,

}