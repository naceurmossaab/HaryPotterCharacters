import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from 'express';
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const ip = ctx.getRequest<Request>().ip;
    const status = exception.getStatus();
    const msg: any = exception.getResponse();

    if (typeof msg === "string")
      response.status(status).json({ statusCode: status, msg, path: request.url, ip })
    else if (msg.message && Array.isArray(msg.message))
      response.status(status).json({ statusCode: status, msg: msg.message.toString(), path: request.url, ip })
    else if (msg.sqlMessage)
      response.status(status).json({
        statusCode: status,
        msg: msg.sqlMessage.split(' for ')[0] || msg.sqlMessage,
        path: request.url,
        ip
      })
    else response.status(status).json({ statusCode: status, msg: "error occured", path: request.url, ip })

  }
}