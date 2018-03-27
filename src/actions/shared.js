import {getInitialData} from '../utis/api';
import { receiveUsers } from '../actions/users';
import { receivePolls } from '../actions/polls';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'tylermcginnis';

export function handleInitialData(){
  return (dispatch) => {
    return getInitialData()
      .then(({users, tweets}) =>{
        dispatch(receiveUsers(users))
        dispatch(receiveTweets(tweets))
        dispatch(setAuthedUser(AUTHED_ID))
      })
  }
}
