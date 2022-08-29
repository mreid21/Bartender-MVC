import request from 'supertest'
import 'dotenv/config'
import { config } from 'dotenv'
config({path: '../../.env'})

describe('GET cocktails', () => {

    /*beforeAll(async () => {
        const res = await request(process.env.BASE_URL).post('/cocktails').send(cocktail)
        id = res.body.id
    })

    afterAll(async () => {
        await request('http://localhost:8080').delete(`/cocktails/${id}`)
    })*/

    it('responds with status code 200', async () => {
        const response = await request(process.env.BASE_URL).get('/cocktails')

        expect(response.statusCode).toBe(200)
    })

    it('sends back an array', async () => {
        const response = await request(process.env.BASE_URL).get('/cocktails')

        console.log(response.body.data)
        expect(Array.isArray(response.body)).toBe(true)
    })

    it('is an array of cocktails', async () => {

        const expected = {
            id: 1,
            name: "Everything and Nothing",
            price: "100",
            img: {
                src: "everything-and-nothing.jpg",
                alt: "everything and nothing"
            }
        }
        const response = await request(process.env.BASE_URL).get('/cocktails')
        

        expect(response.body[0]).toMatchObject(expected)
    })
})

describe('GET user', () => {

    it('returns a token upon successful login', async () => {
        const response = await request(process.env.BASE_URL).get('/users/jsmith21/1234')

        expect(typeof response.body['token']).toBe("string")
    })

    it('sends 401 to users with an invalid login', async () => {
        const response = await request(process.env.BASE_URL).get('/users/jsmith21/12235')

        expect(response.statusCode).toBe(401)
    })
})

describe('GET order', () => {
    


    it('gets all orders when authenticated', async () => {

        const res = await request(process.env.BASE_URL).get('/users/jsmith21/1234')
        const {token} = res.body
        const response = await request(process.env.BASE_URL).get('/orders').set('Authorization', 'Bearer ' + token)

        expect(response.statusCode).toBe(200)
    })

    it('prevents accessing orders without being authenticated', async () => {
      
        const response = await request(process.env.BASE_URL).get('/orders')

        expect(response.statusCode).toBe(401)
    })

})