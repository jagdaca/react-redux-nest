import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './blog.entity';

@Injectable()
export class BlogsService {
    constructor(
        @InjectRepository(Blog)
        private blogRepository: Repository<Blog>,
    ) {}

    getAllBlogs(page: number = 1): Promise<Blog[]> {
        return this.blogRepository.find({
            take:3,
            skip:3 * (page - 1),
        });
    }

    getPublishedBlogs(page: number = 1): Promise<Blog[]> {
        const status = "published";
        return this.blogRepository.find({
            where: {status},
            take:3,
            skip:3 * (page - 1),
        });
    }

    createBlog(blog: Blog): Promise<Blog> {
        return this.blogRepository.save(blog);
    }

    getBlogsCount(status: string): any {
        switch(status) {
            case "all":
                return this.blogRepository.query(
                    'SELECT COUNT(title) AS blogsCount ' +
                    'FROM nestjs_mini_project.blog'
                );
            case "published":
                return this.blogRepository.query(
                    'SELECT COUNT(title) AS blogsCount ' +
                    'FROM nestjs_mini_project.blog ' +
                    'WHERE status="published"'
                );
            default:
                return {blogsCount: 0};
        }
    }
}
