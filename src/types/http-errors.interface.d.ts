interface Problem {
    status: number;
    message: string;
    errors?: Record<string, string[]>;
  }
  
  interface BadRequestError extends Problem {}
  interface UnauthorizedError extends Problem {}
  interface UnAuthenticatedError extends Problem {}
  interface ValidationError extends Problem {}
  interface NotFoundError extends Problem {}
  interface UnhandledException extends Problem {}
  interface NetworkError extends Problem {}
  
  type ApiError =
    | BadRequestError
    | NetworkError
    | NotFoundError
    | UnhandledException
    | UnauthorizedError
    | UnAuthenticatedError
    | ValidationError;
  
  export type {
    Problem,
    BadRequestError,
    UnauthorizedError,
    ValidationError,
    NotFoundError,
    UnhandledException,
    UnAuthenticatedError,
    NetworkError,
    ApiError,
  };
  