import { IParamResources } from 'constants/interface';
import { sendGet } from './axios';

// eslint-disable-next-line import/prefer-default-export
export const getResources = (params?: IParamResources) => sendGet('/resources', params);
