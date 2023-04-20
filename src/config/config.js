const config = {
    BACKEND_URL: process.env.NODE_ENV === "development"
    ?"http://localhost:4000"
    :"https://akdevbackend.onrender.com"
}

export default config