const express = require('express')
const app = express()
app.use(express.json())

let users ={
    (id:1, name:'mark', email:'mark@gmail.com'),
    (id:2, name:'grace', email:'grace@gmail.com')
}

//get user by id
app.get('/api/users/:id',)(req,res) => {
    const user = URLSearchParams.find(u => u.id == parseInt(req.params.id)
)
if (!user){
    return res.status(404).json({
        message: 'user not found'
    })
}
res.json(user)
)}

app.listen(3000, ()=>{
    console.log('server running on port 3000')
})