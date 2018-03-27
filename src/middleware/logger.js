const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log('The action: ', action);
  //next is going to be dispatch, because logger is the last middleware in the chain.
  //So this is analogous to dispatching an action
  const returnValue = next(action)
  console.log('The new state: ', store.getState());
  console.groupEnd();
  return returnValue;
}

export default logger;
