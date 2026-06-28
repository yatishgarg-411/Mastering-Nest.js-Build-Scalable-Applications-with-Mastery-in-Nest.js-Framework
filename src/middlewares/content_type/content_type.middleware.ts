import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ContentTypeMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log(req.headers);
    const content_type = req.headers['content-type'];
    if(!content_type){
      return res.status(400).json({
        message:'Content type is missing'
      });
    }else if(content_type!=='application/json'){
      return res.status(400).json({
        message:'Content type must be application/json'
      });
    }
    next();
  }
}
