var UnicodeDetector=function(options){this.init(options);};UnicodeDetector.prototype.init=function(options){this.msgArea=$('#msg-area');this.charContainer=$('#character-container');this.typerMessage='Enter some text here...';this.typerTimeout=options||50;this.mapGSMExtended=["\n",'^','{','}','\\','[','~',']','|','â‚¬'];this.clickedOnPlaceholder=false;var that=this;this.msgArea.on('click',function(){if(!that.clickedOnPlaceholder){that.clickedOnPlaceholder=true;that.msgArea.val('').trigger('change');}});this.typeMessage();};UnicodeDetector.prototype.renderCharContainer=function(){var str=this.msgArea.val();this.charContainer.html('');for(var i=0;i<str.length;i++){var ch=str.charAt(i);var isUnicode=ch.isUnicode();var attr={html:ch};if(ch===' '){attr.html='&nbsp;';}
if(ch==="\n"){attr.html='â†µ';}
if(isUnicode){attr.class='danger';}
if(this.mapGSMExtended.indexOf(ch)!==-1){attr.class='warning';}
var $brick=$('<span />',attr);this.charContainer.append($brick);}};UnicodeDetector.prototype.typeMessage=function(){var that=this;var typer=setInterval(function(){var c=that.typerMessage.slice(0,1);that.typerMessage=that.typerMessage.slice(1);that.msgArea.val(that.msgArea.val()+c);that.msgArea.focus();that.msgArea.trigger('input.count');if(that.typerMessage.length===0){clearInterval(typer);}},this.typerTimeout);};

        var u = new UnicodeDetector();
        u.msgArea.msgCount({
            smsLeft: 6,
            msgFormat: 'Unicode',
            rate: { }
        });
        u.msgArea.on('input.count', function() {
            u.renderCharContainer();
        });