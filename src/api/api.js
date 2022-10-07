import axios from "axios"
// eslint-disable-next-line
import moment from "moment"
const route =  axios.create({
    baseURL: "https://ap-southeast-1.aws.data.mongodb-api.com/app/rstw-2022-zcbne/endpoint",
    headers: {
        "Content-type": "application/json"
      }
  })

class API {

    add(payload){
        return route.post('/insert', payload)
    }

    get(payload){
        return route.post('/get', payload)
    }

    update(payload){
        return route.post('/update', payload)
    }

    login(username, password){
        return route.post("/login", {
            username: username,
            password: password
        })
    }
}

export default new API()