import { AppAction, AppActionsEnum, AppState } from './types';

const initialState: AppState = {
  page: 1,
  ordering: 'rating',
  search: '',
  platforms: [] as string[],
};

export default function (state = initialState, action: AppAction): AppState {
  switch (action.type) {
    case AppActionsEnum.SET_PAGE: {
      return { ...state, page: action.payload };
    }
    case AppActionsEnum.SET_ORDERING: {
      return { ...state, ordering: action.payload };
    }
    case AppActionsEnum.SET_SEARCH: {
      return { ...state, search: action.payload };
    }
    case AppActionsEnum.ADD_PLATFORM: {
      return { ...state, platforms: [...state.platforms, action.payload] };
    }
    case AppActionsEnum.REMOVE_PLATFORM: {
      return { ...state, platforms: state.platforms.filter((platform) => platform !== action.payload) };
    }
    case AppActionsEnum.RESET_PLATFORMS: {
      return { ...state, platforms: [] as string[] };
    }
    default: {
      return state;
    }
  }
}
