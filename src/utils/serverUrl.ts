const serverUrl = (uri: string) => {
  return process.env.REACT_APP_HOST + uri;
};

export default serverUrl;
