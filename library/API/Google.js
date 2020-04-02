var Google = new Http({
  url:'',
  method:'',
  async:false,
  dataType: 'json',
  data: {},
  beforeSend: function(req) {
    req.setRequestHeader('Authorization', 'Bearer ' + CUSTOM_API_1_CSRF_TOKEN);
  },
  success: function(e){},
  error: function(e){}
});
