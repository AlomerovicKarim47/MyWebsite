import axios from 'axios'
import config from '../config/config'

class MessageService{
    static async sendMessage(messageData){
        await axios.post(`${config.BACKEND_URL}/email`, messageData)
    }
}

export default MessageService