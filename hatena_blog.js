Titanium.include('wsse.js');

// create wsse header
var hatena_id = '';
var hatena_pw = '';
var w = wsseHeader(hatena_id, hatena_pw);

var xhr = Titanium.Network.createHTTPClient();

xhr.onerror = function(e){
    //
};

xhr.onload = function(){
    //
};

xhr.open('GET','http://d.hatena.ne.jp/' + hatena_id + '/atom/blog');
xhr.setRequestHeader('X-WSSE' , w);

var blog_title = 'hello';
var blog_body  = 'hello, titanium world!';
var blog_date  = '2008-01-01T00:00:00+09:00';

var blogContents= '<?xml version="1.0" encoding="utf-8"?><entry xmlns="http://purl.org/atom/ns#">' + 
                  '<title>' + blog_title + '</title>' + 
                  '<content type="text/plain">' + blog_body + '</content>' + 
                  '<updated>' + blog_date + '</updated></entry>';

xhr.send(blogContents);
