/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';

const ActionType = {
  RECEIVE_TALK_DETAIL: 'RECEIVE_TALK_DETAIL',
  CLEAR_TALK_DETAIL: 'CLEAR_TALK_DETAIL',
  TOGGLE_LIKE_TALK_DETAIL: 'TOGGLE_LIKE_TALK_DETAIL',
};

function receiveTalkDetailActionCreator(talkDetail) {
  return {
    type: ActionType.RECEIVE_TALK_DETAIL,
    payload: { talkDetail },
  };
}

function clearTalkDetailActionCreaotr() {
  return { type: ActionType.CLEAR_TALK_DETAIL };
}

function toggleLikeTalkDetail(userId) {
  return {
    type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
    payload: { userId },
  };
}

function asyncReceiveTalkDetail(talkId) {
  return async (dispatch) => {
    dispatch(showLoading());
    dispatch(clearTalkDetailActionCreaotr());

    try {
      const talkdetail = await api.getTalkDetail(talkId);
      dispatch(receiveTalkDetailActionCreator(talkdetail));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

function asyncToogleLikeTalkDetail() {
  return async (dispatch, getState) => {
    dispatch(showLoading());
    const { authUser, talkDetail } = getState();
    dispatch(toggleLikeTalkDetail(authUser.id));

    try {
      await api.toggleLikeTalk(talkDetail.id);
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading());
  };
}

export {
  ActionType,
  receiveTalkDetailActionCreator,
  clearTalkDetailActionCreaotr,
  toggleLikeTalkDetail,
  asyncReceiveTalkDetail,
  asyncToogleLikeTalkDetail,
};
