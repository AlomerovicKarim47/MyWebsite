const config = {
    BACKEND_URL: process.env.NODE_ENV === "production"
    ?"https://akdevbackend.onrender.com"
    :"http://localhost:4000"
}

export default config