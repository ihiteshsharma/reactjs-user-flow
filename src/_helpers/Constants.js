const prod = {
    url:{
        API_URL: 'https://nodejs-user-flow.herokuapp.com'   
    }
}

const dev = {
    url:{
        API_URL: 'http://localhost:4000'  
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;