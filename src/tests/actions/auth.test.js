import { login, logout } from '../../actions/auth'

test('generate login action object', () => {
    const uid = '123abc'
    const action = login(uid)
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('generate logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})