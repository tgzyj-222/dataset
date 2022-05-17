 // eslint-disable-next-line
import { ActionType, AsyncTuple, composeTypes, createAction, createFetchAction } from 'iron-redux';


enum BasicTypes {
  changeId,
}

enum FetchTypes {
  loadList
}

const prefix = 'home/';

const Types = composeTypes({
  BasicTypes,
  FetchTypes,
  prefix,
})

const actions = {
  changeId : createAction(Types.changeId)<number>(),
}

class InitialState {
  id = 3090887;
}

function reducer(state = new InitialState(), action: ActionType<typeof actions>) : InitialState {
  switch (action.type) {
    case Types.changeId:{
      const id = action.payload;
      return {
        ...state,
        id,
      }
    }
    default: {
      return AsyncTuple.handleAll(prefix, state, action)
    }
  }
}

export { actions, reducer, InitialState}