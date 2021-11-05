import axios from "axios"

export const SMURF_FETCH = "SMURF_FETCH"
export const SMURF_SUCCESS = "SMURF_SUCCESS"
export const SMURF_FETCH_FAIL = "SMURF_FETCH_FAIL"
export const SMURF_ADD = "SMURF_ADD"
export const SMURF_SET_ERROR = "SMURF_SET_ERROR"

export const fetchSmurfs = () => (dispatch) => {
  dispatch({
    type: SMURF_FETCH,
  })
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      //console.data(res.data)
      dispatch({ type: SMURF_SUCCESS, payload: res.data })
    })
    .catch((err) => {
      dispatch({ type: SMURF_FETCH_FAIL, payload: err })
    })
}

export const addSmurft = (smurfs) => {
  return { type: SMURF_ADD, payload: smurfs }
}

export const setError = (error) => {
  return { type: SMURF_SET_ERROR, payload: error }
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.
