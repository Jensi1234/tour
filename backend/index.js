const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const bcrypt = require('bcrypt')
const user = require('./Register')
const contact = require('./contact')
const e = require("express")
const { Await } = require("react-router-dom")
const url = "mongodb+srv://jensiakbari:jensi891011@project123.c0ccaua.mongodb.net/?retryWrites=true&w=majority"
 
const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}));
app.use(cors())

mongoose.connect(url).then(()=>{
    console.log('Connected to mongoose')
}).catch((e)=>{
    console.log("error")
})


app.listen(3000,()=>{
    console.log("BE started on port 3000")
})




// app.post('/',async (req,res)=>{
//     const {username,email,password}=req.body
//             const User = new user({
//                 username,
//                 email,
//                 password
//             })
//             User.save().then(()=>{
//                 console.log('User Added')
//             }).catch((e)=>{
//                 console.log('Error adding a user',e)
//             })
//         }
//     )

app.post('/', async (req, res) => {
    const { username, email, password } = req.body;

    
        const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

        const User = new user({
            username,
            email,
            password: hashedPassword // Save the hashed password
        });

        const mail = await user.findOne({ email });

            if (!mail) {
              User.save()
                .then(() => {
                    res.json({ success: true, message: 'User registered successfully' });
                })
                .catch((e) => {
                  console.log("Error adding a user", e);
                });
            } else {
                res.json({ success: false, message: 'Username already exists' });

            }

    
//     const uname = await user.findOne({ username });
//   if (!uname) {
//     User.save()
//       .then(() => {
//         console.log("User Added");
//       })
//       .catch((e) => {
//         console.log("Error adding a user", e);
//       });
//   } else {
//     console.log("user already exists.");
//   }




}
);



// app.post('/Login',async(req,res)=>{
//     const {email,password}=req.body;
//     const User = await user.findOne({email});

//     if(!User)
//     {
//         console.log(res.msg)
//         return res.status(404).json({msg: "Data not found"})
//     }

//     if(password === User.password)
//     {
//         console.log("validPassword")
//         return res.status(200).json({msg: "Logged in sucessfully"})
//     }
//     else
//     {
//         console.log(res.msg)
//         console.log("Invalid")
//         return res.status(500).json({msg: "Invalid credentials"})
//     }
// })

app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const User = await user.findOne({ email });

        if (!User) {
            return res.status(404).json({ msg: 'Data not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, User.password);

        if (isPasswordValid) {
            console.log('Valid Password');
            return res.status(200).json({ msg: 'Logged in successfully' });
        } else {
            console.log('Invalid Password');
            return res.status(401).json({ msg: 'Invalid credentials' });
        }
    } catch (error) {
        console.error('Error during login', error);
        res.status(500).json({ msg: 'Error during login' });
    }
});


   

app.post('/contact',async (req,res)=>{
    const {username,email,password,subject, message}=req.body
            const User = new contact({
                username,
                email,
                password,
                subject,
                message
            })
            User.save().then(()=>{
                console.log('User Added')
            }).catch((e)=>{
                console.log('Error adding a user',e)
            })
        }
    )