class NetworkClient {
    tryConnect(): void {
        throw new Error('no network!');
    }
}

class UserService {
    constructor(private client: NetworkClient) { }
    login() {
        this.client.tryConnect();
    }
}

const client = new NetworkClient();
const service = new UserService(client);
console.log('------------------');
service.login(); //  throw new Error('no network!'); Error: no network!

class App {
    constructor(private userService: UserService) { }
    run() {
        try{
            this.userService.login();
        }catch(error){
            // show dialog to user
        }
    }
};

const app = new App(service);
app.run(); // throw new Error('no network!'); Error: no network!