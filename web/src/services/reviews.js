import http from './base-api';

const create = (review) => http.post('/reviews', review )
.then((res)=> res.data)


export default { 
  create
}