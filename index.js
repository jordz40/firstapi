require('dotenv').config()

const fs = require('fs')
const express = require('express')

const app = express()
const port = process.env.PORT || 8000
const USER_DATA_PATH = "./data/users.json"

app.get('/hello', (req, res, next) => {
    return res.status(200).json({
        message: 'Hello World from hot reload'
    })
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})
// get data users
app.get('/users',(req,res,next) => {
    //buat variabel menampung data readfile
    const usersAsString = fs.readFileSync(USER_DATA_PATH).toString()
    console.log(usersAsString)
    //parse data string jadi json
    const users = JSON.parse(usersAsString)

    //datanya dicek ada atau ngga
    const isUserExist = users && users.length > 0 
    if(!isUserExist){
    return res.status(404).jscon({
        message: "user tidak ditemukan"
    })}
    else{
    return res.status(200).json({
    message:'user tidak ditemukan',
    data:users
    })} 
    
    

})

// create new user

// update existing user

// delete user

// note: pakai file karna belum ke materi db, setelah ke materi db kita akan pakai query database