// Google API
function selectGoogleUsers () {
  return Google.get('/users', {});
}
function selectGoogleUser (id) {
  return Google.get('/user/'+id, {});
}
function insertGoogleUser (user) {
  return Google.post('/user', user);
}
function updateGoogleUser (user) {
  return Google.put('/user', user);
}
function deleteGoogleUser (id) {
  return Google.delete('/user/'+id, {});
}

// Kakao API
function selectKakaoUsers () {
  return Kakao.get('/users', {});
}
function selectKakaoUser (id) {
  return Kakao.get('/user/'+id, {});
}
function insertKakaoUser (user) {
  return Kakao.post('/user', user);
}
function updateKakaoUser (user) {
  return Kakao.put('/user', user);
}
function deleteKakaoUser (id) {
  return Kakao.delete('/user/'+id, {});
}