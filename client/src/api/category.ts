import { IParamCategory } from 'constants/interface';
import { sendGet } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getCategory = (params?: IParamCategory) => sendGet('/category', params);
