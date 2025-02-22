interface ResponseError extends Error {
  status?: number;
  code?: number;
}

const createError = (status: number, message: string) => {
  const err = new Error() as ResponseError;
  err.status = status;
  err.message = message;

  return err;
};

export default createError;
