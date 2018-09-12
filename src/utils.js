export const guid = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
};

export const processAPIData = function(data){
  let res = {};  
  Object.keys(res).forEach((key) => {
    account[res[key].id] = res[key];
  });
  return res;
}
