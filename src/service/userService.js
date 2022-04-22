import axios from 'axios';

const client = axios.create({
    baseURL: 'http://gravitys.ddns.net:8081/users/'
});
export class UserService {
   
    getVaccineReserve(data) {
        return client.post("getvaccinereserve",{userId: data});
    }
    login(data){
        return client.post("login",data);
    }
    register(data){
        return client.post("register",data);
    }
    getVaccine(){
        return client.post("getvaccine");
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
    findUser(data){
        return client.post("finduser", {userId: data});
    }
}
const userService = new UserService();
export default userService;