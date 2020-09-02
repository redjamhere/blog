import { Controller, Get, Res, Param, Header } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Response } from 'express';
import { ArticleListResponse } from './article.types';
import { ReadStream } from 'fs';

@Controller('/api/article')

export class ArticleController {
    constructor( private readonly _articleService: ArticleService ) {};

    @Get('/list')
    getAll(): Promise<ArticleListResponse>{
        return this._articleService.getList();
    }

    @Get('/:name')
    @Header('Content-type', 'application-text')
    getArticle( @Res() res: Response, @Param('name') name:string) {
        const fileStream: ReadStream = this._articleService.getArticle(name);
        fileStream.pipe(res);
    }
}