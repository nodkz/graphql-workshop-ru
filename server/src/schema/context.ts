import { Request, Response } from 'express';

export interface GraphQLContext {
  ip: string;
  req: Request;
  res: Response;
}

export async function prepareContext({
  req,
  res,
}: {
  req: Request;
  res: Response;
}): Promise<GraphQLContext> {
  return {
    ip: req.ip,
    req,
    res,
  };
}
