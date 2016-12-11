export const loadMessage = (message) => {
  return {
    type: 'LOAD_MESSAGE',
    payload: message
  };
};
