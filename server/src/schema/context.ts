import { Request, Response } from 'express';
import { FieldNode } from 'graphql';
import DataLoader from 'dataloader';

export interface GraphQLContext {
  ip: string;
  req: Request;
  res: Response;
  dataloaders: WeakMap<ReadonlyArray<FieldNode>, DataLoader<string, object>>;
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
    dataloaders: new WeakMap(),
  };
}
