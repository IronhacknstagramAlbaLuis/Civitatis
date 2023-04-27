
import http from './base-api'

 const list = () =>  http.get('/activities')
 .then((res) => res.data)





export default {
  list

}