import { resultError, resultSuccess } from "./util";
import Mock from 'mockjs'
function createFakeUserList() {
    return [
        {
            userId: '1',
            username: 'admin',
            password: '123456',
            token: 'fakeToken1',
            realName: 'admin',
            desc: 'admin role',
            roles: [
                {
                    roleName: 'Super Admin',
                    value: 'super'
                }
            ]
        }
    ]
}


// mock user login
Mock.mock(
    '/api/login',
    'post',
    (req: any) => {
        console.log(req);
        const { username, password } = JSON.parse(req);
        const checkUser = createFakeUserList().find(
            (item) => item.username === username && password === item.password
        )
        if (!checkUser) return resultError('Incorrect account or password')
        const { userId, username: _username, token, realName, desc, roles } = checkUser;
        return resultSuccess({
            roles, userId, username: _username, token, realName, desc
        })
    }
)



