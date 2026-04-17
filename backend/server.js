import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './Config/mongodb.js'
import connectCloudinary from './Config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'

// app config
const app = express()
const port = process.env.PORT || 4000

// CONNECT DB ✅
connectDB()
connectCloudinary
// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(port, () => console.log('Server Started on PORT :' + port))