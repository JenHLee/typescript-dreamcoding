{
class TimeoutError extends Error { }
class OfflineError extends Error { }


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
        try {
            this.userService.login();
        } catch (error) {
            // catch 로 error를 감으면 anytime이 됨 error의 정체성이 사라짐
            // show dialog to user
            if (error instanceof OfflineError) { // 따라서 instanceof가 먹히지 않음
                // 
            }
        }
    }
};

const app = new App(service);
app.run(); // throw new Error('no network!'); Error: no network!
}