const express = require ('express')
const {faker} = require ("@faker-js/faker")
const app = express ()
const PORT = 8000

const createRandomUser = () => {
    const userInfo = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        firstName:faker.name.firstName(),
        lastName:faker.name.lastName(),
        id: faker.datatype.uuid(),
    };
    return userInfo;
}

const createCompany = () => {
    const companyInfo = {
        id: faker.datatype.uuid(),
        name:faker.company.name(),
        address:{
            street:faker.address.street(),
            city:faker.address.city(),
            state:faker.address.state(),
            zipCode:faker.address.zipCode(),
            country:faker.address.country()
        }
    };
    return companyInfo;
}

// Create const instances to access the function 
const companyInfo = createCompany()
const userInfo = createRandomUser()

// Const (userInfo & companyInfo) will we used to get called on in response.json

app.get("/api/users/info",(request,response) => {
    response.json(userInfo)
})

app.get("/api/companys/info",(request,response) => {
    response.json(companyInfo)
})

app.get("/api/users/companys/info",(request,response) => {
    response.json([companyInfo,userInfo])
})

// putting the const we created in sqaure brackets 


app.listen(PORT,() => console.log(`Server is up on PORT: ${PORT}`)) 