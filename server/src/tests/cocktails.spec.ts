import request from 'supertest'
import 'dotenv/config'
import { config } from 'dotenv'
config({path: '../../.env'})

describe('GET cocktails', () => {


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

describe('POST orders', () => {

    let authToken = ''
    //new order template
    const order =  {
        total: 300,
        orderedAt: new Date(),
        items: [
            {
                "id": 2,
                "quantity": 2
            },
        ]
    }


    beforeAll(async () => {

        //set auth token
        const res = await request(process.env.BASE_URL).get('/users/jsmith21/1234')
        const {token} = res.body
        authToken = token
    })

    afterEach(async () => {
        //delete order created by test
        const response = await request(process.env.BASE_URL).get('/orders').set('Authorization', 'Bearer ' + authToken)
        await request(process.env.BASE_URL).delete(`/orders/${response.body[0].id}`).set('Authorization', 'Bearer ' + authToken)

    })

    it('responds with status code 201', async () => {
        const response = await request(process.env.BASE_URL).post('/orders').send(order).set('Content-Type' , 'application/json')
        expect(response.statusCode).toBe(201)
    })

    it('should echo a valid order', async () => {
        const expected =  {
            total: "300",
            orderedAt: order.orderedAt.toJSON(),
        }


        const response = await request(process.env.BASE_URL).post('/orders').send(order).set('Content-Type' , 'application/json')
        expect(response.body).toMatchObject(expected)
        expect(typeof response.body["id"]).toBe("number")
    })
})

describe('DELETE orders', () => {

    let authToken = ''
    let currentId = -1

    const order =  {
        total: 300,
        orderedAt: new Date(),
        items: [
            {
                "id": 2,
                "quantity": 2
            },
        ]
    }

    beforeAll(async () => {

        //set auth token
        const res = await request(process.env.BASE_URL).get('/users/jsmith21/1234')
        const {token} = res.body
        authToken = token
    })

    beforeEach(async () => {

        //create temporary order
        const response = await request(process.env.BASE_URL).post('/orders').send(order).set('Content-Type' , 'application/json')

        //store current id before each test
        currentId = response.body.id
    })

    it('responds with status code 203', async () => {

        const response = await request(process.env.BASE_URL).delete(`/orders/${currentId}`).set('Authorization', 'Bearer ' + authToken)
        expect(response.statusCode).toBe(203)
    })

    it('deletes the correct order', async () => {
        const expected = {id: currentId}

        await request(process.env.BASE_URL).delete(`/orders/${currentId}`).set('Authorization', 'Bearer ' + authToken)
        const res = await request(process.env.BASE_URL).get('/orders').set('Authorization', 'Bearer ' + authToken)
        
        //expect an array that DOES NOT have an object with an id matching the current id
        expect(res.body).not.toEqual(expect.arrayContaining([expect.objectContaining(expected)]))
    })

    it('it only deletes the selected order', async () => {
        let lengthOfOrdersBefore = 0
        let lengthOfOrdersAfter = 0

        const getOrdersBefore = await request(process.env.BASE_URL).get('/orders').set('Authorization', 'Bearer ' + authToken)
        lengthOfOrdersBefore = getOrdersBefore.body.length

        await request(process.env.BASE_URL).delete(`/orders/${currentId}`).set('Authorization', 'Bearer ' + authToken)

        const getOrdersAfter = await request(process.env.BASE_URL).get('/orders').set('Authorization', 'Bearer ' + authToken)
        lengthOfOrdersBefore = getOrdersAfter.body.length

        expect(lengthOfOrdersBefore - lengthOfOrdersAfter).toBe(1)
    })
})