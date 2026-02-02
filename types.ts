
export interface FormData {
  fullName: string;
  whatsappNumber: string;
  depositAddress: string;
  withdrawalAddress: string;
  privateKey: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
