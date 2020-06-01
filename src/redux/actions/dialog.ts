export const dialogActions = {
  addMessage: (text: string) => ({type: 'ADD_MESSAGE', text} as const),
  deleteMessage: (id: number) => ({type: 'DELETE_MESSAGE', id} as const)
}