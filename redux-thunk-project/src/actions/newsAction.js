export const FETCH_NEWS_LOADING="FETCH_NEWS_LOADING"
export const FETCH_NEWS_SUCCESS="FETCH_NEWS_SUCCESS"
export const FETCH_NEWS_FAILED="FETCH_NEWS_FAILED"

export const fetchNewsLoading=()=>({
  type: FETCH_NEWS_LOADING,
})
export const fetchNewsSuccess=(news)=>({
  type: FETCH_NEWS_SUCCESS,
  payload:news
})
export const fetchNewsFailed=(errorMsg)=>({
  type: FETCH_NEWS_FAILED,
  payload:errorMsg
})
