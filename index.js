const zod  = require('zod');
const jwt = require('jsonwebtoken');
const jwtsign = "secret";
const emailSchema = zod.string().email();
function generatejwt(useremail,jwtsign){
  const email = emailSchema.safeParse(useremail);
  if(!email.success){
    return "invalid email";
  }
  return jwt.sign({
   useremail
  },jwtsign);
  
}
function decodejwt(returnn){
        const decodejwt = jwt.decode(returnn);
        if(decodejwt){
            return decodejwt;
        }
        else{
            return(false);
        }
}

function verifyjwt(returnn){
    try {
        jwt.verify(returnn,jwtsign);
        return "verified";
    }
    catch(e){
        return "invalid token";   
    }
}


const username = "aasa@asd.com";
const returnn = generatejwt(username,jwtsign);
const isdecodeable = decodejwt (returnn);
const verifingjwt = verifyjwt(returnn);
console.log(returnn);
console.log(isdecodeable);
console.log(verifingjwt);