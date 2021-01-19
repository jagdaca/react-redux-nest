import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { paginationActions } from '../_actions';
import { blogActions } from '../_actions';

class HomePage extends React.Component {

    componentDidMount() {
        const { user } = this.props;

        if (user.role === "admin") {
            this.props.getTotalBlogsCount("all");
            this.props.getAllBlogs();
        }
        else {
            this.props.getTotalBlogsCount("published");
            this.props.getPublishedBlogs();
        }    
    }

    handlePageNumberClick(number) {
        const { user } = this.props;
        if(user.role === "admin") {
            return (e) => this.props.getAllBlogs(number);
        }
        else {
            return (e) => this.props.getPublishedBlogs(number);
        }
    }

    render() {
        const { user, blogs, pagination } = this.props;

        const pageNumbers = [];
        const itemsPerPage = 3;
        let totalItems = 0;

        if(pagination.count) {
            totalItems = pagination.count[0].blogsCount;
            for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
                pageNumbers.push(i);
            }
        }

        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Hi {user.username}!</h1>
                <p>You're logged in as {user.role}. </p>

                <h3>Blog entries:</h3>
                {blogs.loading && <em>Loading blogs...</em>}
                {blogs.error && <span className="text-danger">ERROR: {blogs.error}</span>}
                {blogs.items &&
                    <div className="card">
                        {blogs.items.map((blog, index) =>
                            <div className="card-body" key={blog.id} >
                                <h3 className="card-title"> {blog.title} </h3>  {(new Date(blog.createdAt)).toDateString()}
                                <p className="card-text"> {blog.content} </p>
                            </div>
                        )}
                    </div>
                }

                {pagination.count &&
                    <nav>
                        <ul className='pagination'>
                          {pageNumbers.map(number => (
                            <li key={number} className='page-item'>
                              <a onClick={this.handlePageNumberClick(number)} className='page-link'>
                                {number}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </nav>
                }
                
                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}

function mapState(state) {
    const { blogs, authentication, pagination } = state;
    const { user } = authentication;
    return { user, blogs, pagination };
}

const actionCreators = {
    getTotalBlogsCount: paginationActions.getBlogsCount,
    getAllBlogs: blogActions.getAll,
    getPublishedBlogs: blogActions.getPublished,
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };