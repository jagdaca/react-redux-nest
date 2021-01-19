import { paginationConstants } from "../_constants";

export function pagination(state = {}, action) {
  switch (action.type) {
    case paginationConstants.GET_BLOG_COUNT_REQUEST:
      return {
        loading: true
      };
    case paginationConstants.GET_BLOG_COUNT_SUCCESS:
      //console.log(action.count);
      return {
        count: action.count
      };
    case paginationConstants.GET_BLOG_COUNT_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}