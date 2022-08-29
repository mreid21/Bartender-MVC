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