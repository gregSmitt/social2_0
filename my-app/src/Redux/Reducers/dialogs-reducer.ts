import { actionType, DialogsPageType } from 'types/types';

const ADD_MESSAGE = 'dialogs/ADD_MESSAGE';
const SET_DIALOGS_CURRENT_ID = 'dialogs/SET_DIALOGS_CURRENT_ID';
const SET_ADD_MESSAGE_CACHE = 'dialogs/SET_ADD_MESSAGE_CACHE';

const initialState = {
	addMessageCache: '',
	currentUserId: '',
	messagesData: [
		{
			userId: 1,
			messages: [
				{
					messageId: 0,
					messageData: {
						text: 'The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.',
						author: 'Mr One',
						isMe: true
					}
				},
				{
					messageId: 1,
					messageData: {
						text: 'Blessed is he who, in the name of charity and good will',
						author: 'Mr One',
						isMe: true
					}
				},
				{
					messageId: 2,
					messageData: {
						text: 'Shepherds the weak through the valley of darkness',
						author: 'Wooman',
						isMe: false
					}
				},
				{
					messageId: 3,
					messageData: {
						text: "for he is truly his brother's keeper and the finder of lost children",
						author: 'Mr One',
						isMe: true
					}
				},
				{
					messageId: 4,
					messageData: {
						text: "And I will strike down upon thee with great vengeance and furious anger",
						author: 'Wooman',
						isMe: false
					}
				},
				{
					messageId: 5,
					messageData: {
						text: "those who attempt to poison and destroy my brothers",
						author: 'Wooman',
						isMe: false
					}
				},
				{
					messageId: 6,
					messageData: {
						text: "those who attempt to poison and destroy my brothers",
						author: 'Wooman',
						isMe: false
					}
				},
				{
					messageId: 7,
					messageData: {
						text: "And you will know my name is the Lord when I lay my vengeance upon thee",
						author: 'Mr One',
						isMe: true
					}
				},
				{
					messageId: 8,
					messageData: {
						text: "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
						author: 'Wooman',
						isMe: false
					}
				},
			]
		},
		{
			userId: 2,
			messages: [
				{
					messageId: 0,
					messageData: {
						text: 'Where is my money, fucking nigga?',
						author: 'Mr One',
						isMe: true
					}
				}
			]
		},
		{
			userId: 3,
			messages: [
				{
					messageId: 0,
					messageData: {
						text: 'By some bread son',
						author: 'Mr One',
						isMe: true
					}
				},
				{
					messageId: 0,
					messageData: {
						text: 'By some brain boomer',
						author: 'Son',
						isMe: false
					}
				}
			]
		},
	],
	interlocutorsData: [
		{ userId: '1', name: 'Woman' },
		{ userId: '2', name: 'Robert' },
		{ userId: '3', name: 'Son' }
	],
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: actionType) => {
	switch (action.type) {
		case ADD_MESSAGE:
			if (state.addMessageCache) {
				state = { ...state };
				state.messagesData = [...state.messagesData];
				const findedDialog = state.messagesData.find((dialog: any) => dialog.userId === 1); //*можно изменять 1 на другое число и вносить изменения в другой диалог
				if (findedDialog) {
					const newMessage = {
						messageId: findedDialog.messages[findedDialog.messages.length - 1].messageId + 1, //Находим последнее сообщение в диалоге и берем его id, увеличивая на 1
						messageData: {
							text: state.addMessageCache,
							author: 'Mr One',
							isMe: true
						}
					}
					findedDialog.messages.push(newMessage);
					state.addMessageCache = '';
				}
			}
			return state;
		case SET_ADD_MESSAGE_CACHE:
			if (action.text || action.text === '') { //!КОСТЫЛЬ
				return {
					...state,
					addMessageCache: action.text
				}
			}
			return state;
		case SET_DIALOGS_CURRENT_ID:
			if (action.id) { //!КОСТЫЛЬ
				state.currentUserId = action.id;
			}
			return state;
		default: return state;
	}
}


export const addMessage = () => ({ type: ADD_MESSAGE })
export const changeCache = (cache: string) => ({ type: SET_ADD_MESSAGE_CACHE, text: cache })
export const setDialogsCurrentId = (id: string) => ({ type: SET_DIALOGS_CURRENT_ID, id: id })