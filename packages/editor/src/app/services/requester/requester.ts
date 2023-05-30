import { Listener, JSON_DATA, EndpointRequestConfig } from './requester.types';

export const invoke = (endpoint: string, params?: JSON_DATA, type?: 'GET' | 'POST', options?: EndpointRequestConfig) => {
  console.log('invoking', endpoint, params, type, options);
  return window.scrowlProxy.invoke(endpoint, params, type, options);
};

export const on = (endpoint: string, listener: Listener) => {
  window.scrowlProxy.on(endpoint, listener);
};

export const send = (endpoint: string, ...args: unknown[]) => {
  window.scrowlProxy.send(endpoint, ...args);
};

export const off = (endpoint: string, listener: Listener) => {
  window.scrowlProxy.removeListener(endpoint, listener);
};

export const offAll = (endpoint: string) => {
  window.scrowlProxy.removeListenerAll(endpoint);
};