var encodeURL = encodeURIComponent(url),
encodeTitle = encodeURIComponent(title),
encodePicture = encodeURIComponent(picture);

function shareFacebook(){
  var link="https://www.facebook.com/sharer/sharer.php?u=" + encodeURL;
  window.open(link);}

function shareTwitter(){
var link = "https://twitter.com/home?status="+ encodeURL
;
window.open(link);}

function shareLinkedin(){
  var link = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURL;
  window.open(link);}

    function shareReddit(){
      var link="http://reddit.com/submit?url="+encodeURL+"&title="+encodeTitle;
      window.open(link);}

        function shareDigg(){
          var link = "http://digg.com/submit?url="+ encodeURL + "&title=" + encodeTitle;
          window.open(link);}

          function sharePinterest(){
            var link = "https://pinterest.com/pin/create/bookmarklet/?media=" + encodePicture + "&url=" + encodeURL + "&description=" + encodeTitle;
            window.open(link);}
function sharePinterestPicture(picFile){
    var encodePinPic = encodeURIComponent("https://hawkwhiz.github.io/images/" + "picFile");
    var link = "https://pinterest.com/pin/create/bookmarklet/?media=" + encodePinPic + "&url=" + encodeURL + "&description=" + encodeTitle;
    window.open(link);
}
