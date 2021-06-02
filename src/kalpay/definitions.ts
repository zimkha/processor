
export interface IPayload {
  amount: number,
  receiver_id: string,
  success_url: string,
  cancel_url:string,
  callback_url: string

}

export interface auth {
   phoneNumber: string,
   password: string,
   role: string
}

export interface IReturnResponse {
    code?: number;
    message?: string;
    error?: string;
    data?: any;
}
export interface IPN {
  status: string,
  partner_id: string,
  recipient_phone_number: string
}