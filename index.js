   const express = require('express');
   const z = require('zod');
   const app = express();
   const port =  process.env.PORT|| 5000 ;

   app.use(express.json());
   const validation= (obj) =>
   {

   const Schema = z.object({ 
   username : z.string(),
   Usernumber  : z.number()
   })
   const response = Schema.safeParse(obj)
   return response;
   
   }
  

   app.post('/home', (req,res)=>{
      var User_name = req.body.User_name
      const user_number = req.body.user_number
      console.log(user_number);
      console.log(User_name);
     

      const response =  validation
         ({
            "username": User_name,
            "Usernumber": user_number
         })
        console.log(response);
      if(!response.success)
         {
            res.send("given input is in invaild format")
         }
      else
         {
         res.send({ "username": response.data.username,
               "number" :response.data.Usernumber
         });
         }
   })


   app.listen(port , ()=>{
      console.log("server is running!!" + `running at ${port}`);

   })