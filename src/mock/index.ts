import instance from './request'

export const Login = (res: any) => {
    return instance({
        url: '/login',
        method: 'POST',
        data: res
    }).then(response => {
        console.log(response.data);
    })
}

export default { Login }