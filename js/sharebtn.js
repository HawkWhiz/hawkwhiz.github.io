var encodeURL = encodeURIComponent(url),
encodeTitle = encodeURIComponent(title);

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
