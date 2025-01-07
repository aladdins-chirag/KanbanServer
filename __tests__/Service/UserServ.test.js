const request = require('supertest')
const app = require('../../app')
const { saveUser } = require('../../DataAccess/UserDataAccess')
const { createUserServ } = require('../../Service/UserServ')

const isUndefinedOrNull = (value) => {
    return (value !== null && value !== undefined && value !== "")
}

//jest.fn - mocking function
// jest.mock - mocking module
// module that mocked must have that function declare within it and by giving path jest create all 
// jest.mock('../../DataAccess/UserDataAccess')
// jest.mock('../../Service/UserServ', () => {
//     return {
//         createUserServ: jest.fn(),
//         getAllUserServ: jest.fn()
//     }
// })

// describe('Testing UserService module', () => {
//     test('should create a user by passing arguments', async () => {
//         const inputs = { username: 'Arpit', email: 'test@1.com', password: '1234' }
//         const mockData = { _id: '123456', ...inputs }

//         saveUser.mockResolvedValue(mockData)

//         createUserServ.mockImplementation(async ({ username, email, password }) => {
//             const res = await saveUser(username, email, password)
//             return res
//         })
//         const res = await createUserServ(inputs)
//         expect(res).toBe(mockData)
//     })

//     test('should show error if email or password  is { undefined | null | "" } ', async () => {
//         try {
//             const inputs = { username: 'Arpit', email: null, password: '' }

//             createUserServ.mockImplementation(async ({ username, email, password }) => {
//                 if (isUndefinedOrNull(email) || isUndefinedOrNull(password)) {
//                     throw new Error('Please provide Credentials!')
//                 }
//                 const res = await saveUser(username, email, password)
//                 return res
//             })

//             const user = await createUserServ(inputs)
//             return user
//         } catch (error) {
//             expect(error.message).toBe('Please provide Credentials!')
//         }
//     })
// })


describe('Testing route / ', () => {
    test('GET / must written json response as Hello World!', async () => {
        const res = await request(app)
            .get('/api/users')
            .expect('Content-type', /json/)
            .expect(200)

        expect(res.body.message).toBe('Hello')
        console.log(res.body)
    })
})