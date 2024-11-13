import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const errorMessages = {
  P2025: {
    default: 'Resource not found',
    specifics: {
      Customer: 'Customer not found',
      OTP: 'Invalid or expired code',
    },
  },
  P2002: {
    default: 'Resource already exists',
    specifics: {
      Customer: 'Customer with the requested email already exists',
    },
  },
};

const handleErrorResponse = (error: Error, defaultMessage: string) => {
  if (error instanceof PrismaClientKnownRequestError) {
    const errorDetail = errorMessages[error.code];

    if (errorDetail) {
      const specificMessage = Object.keys(errorDetail.specifics).find((key) =>
        error.message.includes(key)
      );

      if (specificMessage) {
        throw new Error(
          JSON.stringify({
            status: error.code === 'P2025' ? 404 : 400,
            message: errorDetail.specifics[specificMessage],
          })
        );
      }

      throw new Error(
        JSON.stringify({
          status: 400,
          message: errorDetail.default,
        })
      );
    }
  }

  throw new Error(defaultMessage);
};

export default handleErrorResponse;
