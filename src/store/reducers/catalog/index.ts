import { CatalogAction, CatalogActionsEnum, CatalogState } from './types';
import { orderList } from '../../../consts';

const initialState: CatalogState = {
  page: 1,
  ordering: orderList[0],
  search: '',
  platforms: [] as string[],
};

export default function (state = initialState, action: CatalogAction): CatalogState {
  switch (action.type) {
    case CatalogActionsEnum.SET_PAGE: {
      return { ...state, page: action.payload };
    }
    case CatalogActionsEnum.SET_ORDERING: {
      return { ...state, ordering: action.payload };
    }
    case CatalogActionsEnum.SET_SEARCH: {
      return { ...state, search: action.payload };
    }
    case CatalogActionsEnum.ADD_PLATFORM: {
      return { ...state, platforms: [...state.platforms, action.payload] };
    }
    case CatalogActionsEnum.REMOVE_PLATFORM: {
      return { ...state, platforms: state.platforms.filter((platform) => platform !== action.payload) };
    }
    default: {
      return state;
    }
  }
}
