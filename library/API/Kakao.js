var Kakao = new Http({
  url:'',
  method:'',
  async:false,
  dataType: 'json',
  data: {},
  beforeSend: function(req) {
    req.setRequestHeader('API_KEY', CUSTOM_API_2_CSRF_TOKEN);
  },
  success: function(e){},
  error: function(e){}
});