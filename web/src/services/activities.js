
import http from './base-api'

const detailQuery = (query) => http.get('/activities', { params: query })
.then((res) => res.data)

 const list = () =>  http.get('/activities')
 .then((res) => res.data)

 const detail = (id) => http.get(`/activities/${id}`)
  .then((res) => res.data);





export default {
  list,
  detail,
  detailQuery

}