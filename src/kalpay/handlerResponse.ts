import { IReturnResponse } from './definitions'

export const fnReturn = ({message,error,code,data}:IReturnResponse) => ({
  message, code, error, data
})