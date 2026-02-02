let userArray = []
let nextId = 1

const getall = () => {
    return userArray
}

const addOne = (
    name,
    email,
    passowrd,
    phone_number,
    gender,
    date_of_birth,
    membership_status
) => {
    if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status) {
      return false
    }
    
    const newUser = {
      id: nextId++,
      name,
      email,
      password,
      phone_number,
      gender,
      date_of_birth,
      membership_status,
   };

   userArray.push(newUser);
   return newUser;
}


module.exports = {}