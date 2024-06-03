import { Hono } from 'hono'

const app = new Hono()

app.post('/api/v1/user/signup', (c) => {
  return c.text('Hi Signup')
})

app.post('/api/v1/user/signin', (c) => {
  return c.text('Hi Signin!')
})


app.post('/api/v1/blog',(c)=>{
  return c.json({"messgae":"This is blog page"})
})

app.put('/api/v1/blog',(c)=>{
  return c.json({"message":"blog"})
})

app.get('/api/v1/blog/:id',(c)=>{
  return c.json({"message":"Blod Id"})
})


app.get('/api/v1/blog/:id',(c)=>{
  return c.json({"message":"bulk page"})
})


export default app
