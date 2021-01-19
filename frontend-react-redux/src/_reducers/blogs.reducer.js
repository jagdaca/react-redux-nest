import { blogConstants } from '../_constants';

export function blogs(state = {}, action) {
  switch (action.type) {
    case blogConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case blogConstants.GETALL_SUCCESS:
      return {
        items: action.blogs
      };
    case blogConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case blogConstants.GETPUBLISHED_REQUEST:
      return {
        loading: true
      };
    case blogConstants.GETPUBLISHED_SUCCESS:
      return {
        items: action.blogs
      };
    case blogConstants.GETPUBLISHED_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}