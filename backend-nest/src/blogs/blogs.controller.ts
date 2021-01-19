import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { Blog } from './blog.entity';
import { BlogsService } from './blogs.service';


@Controller('blogs')
export class BlogsController {

    constructor(private blogService: BlogsService) { }

    @Roles('admin')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Get()
    public getAllBlogs(@Query('page') page: number) {
        return this.blogService.getAllBlogs(page);
    }

    @UseGuards(JwtAuthGuard)
    @Get('published')
    public getPublishedBlogs(@Query('page') page: number) {
        return this.blogService.getPublishedBlogs(page);
    }

    @Post()
    create(@Body() blog: Blog) {
        return this.blogService.createBlog(blog);
    }

    @UseGuards(JwtAuthGuard)
    @Get('count')
    public getBlogsCount(@Query('status') status: string) {
        return this.blogService.getBlogsCount(status);
    }

}
