function doPost(e) {
  var postdata = JSON.parse(e.postData.contents);
  
  var token = lineToken;
  
  var formData = {
    'message' : postdata.content,
    'imageThumbnail' : postdata.photo,
    'imageFullsize' : postdata.photo
  };
  
  var options = {
    'method': "post",
    'payload': formData,
    'headers': { "Authorization": "Bearer " + token }
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}