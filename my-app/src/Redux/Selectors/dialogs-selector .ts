import { StateType, SimpleTable, MessagesData } from 'types/types';
import { createSelector } from 'reselect';


const getInterlocutorsDataSelector = (state: StateType): SimpleTable => {
	return state.dialogsPage.interlocutorsData;
}
export const getInterlocutorsData = createSelector(getInterlocutorsDataSelector,
	(interlocutorsData: SimpleTable) => interlocutorsData
); //! https://youtu.be/nDh92Vnf3_k?t=1640 <--- Если ты не ебешь что это, все вопросы сюда

const getMessagesDataSelector = (state: StateType): MessagesData => {
	return state.dialogsPage.messagesData;
}
export const getMessagesData = createSelector(getMessagesDataSelector,
	(messagesData: MessagesData) => messagesData
);

const getAddMessageCacheSelector = (state: StateType): string => {
	return state.dialogsPage.addMessageCache;
}
export const getAddMessageCache = createSelector(getAddMessageCacheSelector,
	(addMessageCache: string) => addMessageCache
);