import axios from 'axios';

const client = axios.create({
    baseURL: 'http://gravitys.ddns.net:8081/users/'
});
export class UserService {
   
    getVaccine(data) {
        return client.post("getvaccinereserve",{userId: data});
    }
    login(data){
        return client.post("login",data);
    }
    register(data){
        return client.post("register",data);
    }
    getCovidVaccine(){
        return client.post("getcovidvaccine");
    }
    getOtherVaccine(){
        return client.post("getothervaccine");
    }
    getHospital(){
        return client.post("gethospital");
    }
    reserveVaccine(data){
        return client.post("reservevaccine", data);
    }
}
const userService = new UserService();
export default userService;