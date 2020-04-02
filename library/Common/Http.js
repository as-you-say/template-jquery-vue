var Http = function(options){
  // Base AJAX
  function ajax(url, data){
    options.url = url;
    options.data = data;
    return {
      then: function(success){
        options.success = success;
        return {
          catch: function(error){
            options.error = error;
            $.ajax(options);
          }
        }
      }
    }
  }

  // GET - select
  // POST - insert
  // PUT - update
  // DELETE - delete
  return {
    get:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'GET';
      return ajax(url, data);
    },
    post:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'POST';
      return ajax(url, data);
    },
    put:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'PUT';
      return ajax(url, data);
    },
    delete:function(url, data, async){
      options.async = (async === undefined) ? false : async;
      options.method = 'DELETE';
      return ajax(url, data);
    }
  }
};
