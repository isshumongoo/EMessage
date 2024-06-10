import { create } from 'zustand'
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase"
import { useUserStore } from './userStore';

export const useChatStore = create((set) => ({
  chatID: null,
  user:null,
  isCurrentUserBlocked: false,
  isReceiverBlocked:false,

  changeChat:(chatID,user) => {
    const currentUser = useUserStore.getState().currentUser;

    // CHECK IF CURRENT USER IS BLOCKED
    if (user.blocked.includes(currentUser.id)) {

      return set({
        chatID,
        user:null,
        isCurrentUserBlocked: true,
        isReceiverBlocked:false,
      });
    }
    // CHECK IF RECEIVER IS BLOCKED
    else if (currentUser.blocked.includes(user.id)) {

      return set({
        chatID,
        user:user,
        isCurrentUserBlocked: false,
        isReceiverBlocked:true,
      });
    } else {

    return set({
      chatID,
      user,
      isCurrentUserBlocked: false,
      isReceiverBlocked:false,
    });
    }
  },

  changeBlock: () => {
    set(state =>({...state, isReceiverBlocked: !state.isReceiverBlocked}))
  }
}));