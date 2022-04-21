import axios from 'axios';

const client = axios.create({
    baseURL: 'http://gravitys.ddns.net:8081/staff/'
});
export class staffService {
    login(data){
        return client.post("login",data);
    }
    
}
const staffService = new staffService();
export default staffService;