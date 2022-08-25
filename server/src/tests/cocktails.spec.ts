import request from 'supertest'


describe('GET /cocktails', () => {

    let id = 0
    const cocktail = {
        name: 'Cosmic Sunset',
        price: 50
    }

    beforeAll(async () => {
        const res = await request('http://localhost:8080').post('/cocktails').send(cocktail)
        id = res.body.id
    })

    afterAll(async () => {
        await request('http://localhost:8080').delete(`/cocktails/${id}`)
    })

    it('responds with status code 200', async () => {
        const response = await request('http://localhost:8080').get('/cocktails')

        expect(response.statusCode).toBe(200)
    })

    it('gets cocktails from menu', async () => {
        const response = await request('http://localhost:8080').get('/cocktails')

        expect(response.body).toContainEqual({id: 1, name: 'Cosmic Sunset', price: 50})
    })
})