const userModel = require('../models/user.model');

const register = async (req, res) => {
    const {username,email,password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // console.log(req.body)
    try {

        if (username == '' || email == '' || password == '') {
            return res.status(400).json({
                message: "Please fill all the fields"
            })
        }


           if (!email.match(emailRegex)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }  

        const isUser = await userModel.find({email});
        console.log(isUser);
        if (isUser.length>0) {
            return res.status(400).json({
                message: "user already exists",
                isUser
            })
        }
        const registeredUser = await userModel.create({
            username,
            email,
            password
        })
        res.status(200).json({
            message: `User registered`,
            registeredUser
        })

        // single HTTP request has single response

    } catch (error) {
        console.log(error);
        if(error.code === 11000) {
            console.log('duplicate comments');
            return { message: 'saved comments but with errors' };
        } else {
            throw new Error(error);
        }
        // return res.status(400).json({
        //     message: `Something went wrong ${error.message}`,

        // })
    }
}

const login = async (req, res)=>{

    const {email,password} = req.body;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    console.log(req.body);
    try {

        if (email == '' || password == '') {
            return res.status(404).json({
                message: 'Please fill all fields'
            })
        }

        if (!email.match(emailRegex)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }  


        const isUser = await userModel.find({email});

        // console.log(isUser.length);
        if(isUser.length == 0){
            return res.status(400).json({
                message:`user dose not exist , please register`
            })
        }



        if(isUser.length>0 && isUser[0].password){
            if(isUser[0].password == password){
                return res.status(200).json({
                    message:`Login Successfull`,
                    isUser
                })
            }
        }
    } catch (error) {
            console.log(error);

            res.status(400).json({
                message:`Something went wrong ${error.message}`
            })
    }
}

module.exports = {
    register,login
}