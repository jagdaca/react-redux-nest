import { blogConstants } from '../_constants';
import { blogService } from '../_services';

export const blogActions = {
    getAll,
    getPublished,
    getPaginated,
};

function getAll(page) {
    return dispatch => {
        dispatch(request());

        blogService.getAll(page)
            .then(
                blogs => dispatch(success(blogs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: blogConstants.GETALL_REQUEST } }
    function success(blogs) { return { type: blogConstants.GETALL_SUCCESS, blogs } }
    function failure(error) { return { type: blogConstants.GETALL_FAILURE, error } }
}

function getPublished(page) {
    return dispatch => {
        dispatch(request());

        blogService.getPublished(page)
            .then(
                blogs => dispatch(success(blogs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: blogConstants.GETPUBLISHED_REQUEST } }
    function success(blogs) { return { type: blogConstants.GETPUBLISHED_SUCCESS, blogs } }
    function failure(error) { return { type: blogConstants.GETPUBLISHED_FAILURE, error } }
}

function getPaginated(page) {
    return dispatch => {
        dispatch(request());

        blogService.getPaginated(page)
            .then(
                blogs => dispatch(success(blogs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: blogConstants.GETALL_REQUEST } }
    function success(blogs) { return { type: blogConstants.GETALL_SUCCESS, blogs } }
    function failure(error) { return { type: blogConstants.GETALL_FAILURE, error } }
}