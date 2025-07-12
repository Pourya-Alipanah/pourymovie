/* eslint-disable no-throw-literal */
import {
  ApiError,
  BadRequestError,
  NetworkError,
  NotFoundError,
  UnAuthenticatedError,
  UnauthorizedError,
  UnhandledException,
  ValidationError,
} from "@/types/http-errors.interface";

export type ApiErrorHandler = (errorData: ApiError) => void;

export const BadRequestErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } satisfies BadRequestError;
};
export const UnauthorizedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    message: "You've not access to this section",
  } satisfies UnauthorizedError;
};
export const UnAuthenticatedErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    message: "session expired or invalid. Redirecting to login...",
  } satisfies UnAuthenticatedError;
};
export const ValidationErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } satisfies ValidationError;
};
export const NotFoundErrorStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
  } satisfies NotFoundError;
};
export const UnhandledExceptionStrategy: ApiErrorHandler = (errorData) => {
  throw {
    ...errorData,
    message: "Internal Server Error",
  } satisfies UnhandledException;
};
export const NetworkErrorStrategy = () => {
  throw {
    message: "Network Error",
  } as NetworkError;
};

export const errorHandler: Record<number, ApiErrorHandler> = {
  400: BadRequestErrorStrategy,
  401: UnAuthenticatedErrorStrategy,
  403: UnauthorizedErrorStrategy,
  404: NotFoundErrorStrategy,
  422: ValidationErrorStrategy,
  500: UnhandledExceptionStrategy,
};
