import axios from 'axios';
import { auth, IPN , IPayload} from './definitions';
import  config  from './config'
import { fnReturn } from './handlerResponse';

const validateIPNData = (ipn: IPN) => {
  return (ipn.status === 'SUCCESSFUL' || ipn.status === 'FAILED') &&
    ipn.partner_id && ipn.partner_id.length > 12 &&
    ipn.recipient_phone_number && ipn.recipient_phone_number.length > 4;
}


export default class KalPayController {
  
  validatedAmount = async (amount): Promise<any> => {
      amount = parseInt(amount);
      try{
          return !isNaN(amount) && amount > 100;
      }
      catch(e) {
        return false;
      }
  }
  authenticate = async (data: auth): Promise<any> => {

  } 

  handlePayment = async (payload: IPayload): Promise<any> => {
       axios({
        url: `${config.v2apiUrl}`,
        method: 'POST',
        data :payload,
        headers: {
          Accept:        `application/json`,
          Authorization: `Bearer `
        },
       })
       .then((res) => {
         return {
           message: 'Success',
           code: 200,
           error: null,
           data: res
         }
       })
       .catch((err) => {
         return {
          message: 'Error Server',
          code: 400,
          error: 'Eror Encourted',
          data: err
         }
       })
  }

  handleIPN =  async (): Promise<any> => {

  }
  
 


}