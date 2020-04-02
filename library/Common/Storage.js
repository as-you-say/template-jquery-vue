var Storage = (function(){
  return {
    set: function(key, value){
      localStorage.setItem(key, value)
    },
    get: function(key){
      localStorage.getItem(key);
    }
  }
})();