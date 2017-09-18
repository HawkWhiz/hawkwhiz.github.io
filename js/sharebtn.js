var encodeURL = encodeURIComponent(url),
encodeTitle = encodeURIComponent(title),
encodePicture = encodeURIComponent(picture);

function shareFacebook(U){
  var link="https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(U);
  window.open(link);}

function shareTwitter(U){
var link = "https://twitter.com/home?status="+ encodeURIComponent(U);
window.open(link);}

function shareLinkedin(U){
  var link = "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(U);
  window.open(link);}

    function shareReddit(U, T){
      var link="http://reddit.com/submit?url=" + encodeURIComponent(U) + "&title=";
      window.open(link);}

        function shareDigg(U,T){
          var link = "http://digg.com/submit?url=" + encodeURIComponent(U) + "&title=" + encodeURIComponent(T);
          window.open(link);}

          function sharePinterest(P,U,T){
            var link = "https://pinterest.com/pin/create/bookmarklet/?media=" + encodeURIComponent(P) + "&url=" + encodeURIComponent(U) + "&description=" + encodeURIComponent(T);
            window.open(link);}

/*function sharePinterestPicture(picFile){
    var encodePinPic = encodeURIComponent("https://hawkwhiz.github.io/images/" + "picFile");
    var link = "https://pinterest.com/pin/create/bookmarklet/?media=" + encodePinPic + "&url=" + encodeURL + "&description=" + encodeTitle;
    window.open(link);
}*/
