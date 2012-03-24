
Titanium.Media.showCamera({
    success:function(event){

        var xhr = Titanium.Network.createHTTPClient();

        // create encoded image
        var imageView    = Ti.UI.createImageView({image:event.media});
        var renderedView = imageView.toImage(); //image of the rendered view
        var encodedView  = Ti.Utils.base64encode(renderedView);

        // create wsse header
        Titanium.include('wsse.js');
        var hatena_id = '';
        var hatena_pw = '';
        var w = wsseHeader(hatena_id, hatena_pw);

        xhr.onerror = function(e){
            //
        };

        xhr.onload = function(){
            //
        };

        xhr.open('POST','http://f.hatena.ne.jp/atom/post');

        xhr.setRequestHeader('X-WSSE' , w);
        xhr.setRequestHeader("Content-Type", "application/x.atom+xml");

        var xmlString=  '<entry xmlns="http://purl.org/atom/ns#"><title>Sample</title>'
                      + '<content mode="base64" type="image/jpeg">' + encodedView + '</content></entry>';

        xhr.send(xmlString);

    },
    cancel:function(e){
        //
    },
    error:function(e){
        //
    },
    allowImageEditing:false,
    saveToPhotoGallery:false
});