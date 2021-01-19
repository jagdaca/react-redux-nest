import { paginationConstants } from '../_constants';
import { paginationService } from '../_services';

export const paginationActions = {
    getBlogsCount
};

function getBlogsCount(status) {
    return dispatch => {
        dispatch(request());

        paginationService.getBlogsCount(status)
            .then(
                count => dispatch(success(count)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: paginationConstants.GET_BLOG_COUNT_REQUEST } }
    function success(count) { return { type: paginationConstants.GET_BLOG_COUNT_SUCCESS, count } }
    function failure(error) { return { type: paginationConstants.GET_BLOG_COUNT_FAILURE, error } }
}