import {object, string} from 'yup'

const messageValidation = object({
    name: string().required("Please enter your name."),
    email: string().required("Please enter your email.")
                .email("Please enter a valid email adress."),
    message: string().required("Please leave a message.").max(500, "Maximum message length is 500 characters.")
})

export default messageValidation