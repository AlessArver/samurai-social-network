export const dialogActions = {
  addMessage: (text: string) => ({type: 'SN/DIALOGS/ADD_MESSAGE', text} as const),
  deleteMessage: (id: number) => ({type: 'SN/DIALOGS/DELETE_MESSAGE', id} as const)
}