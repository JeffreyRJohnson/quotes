$(document).ready(function(){



    var quote;
    var author;
    getQuote();
    function getQuote(){
        /* call api */
        var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

        $.getJSON(url, function(data)

        {

            quote = data.quoteText;
            author = data.quoteAuthor;
            console.log(quote, quote.length);
            /* if quote is short enough for
             twitter get it or else get a new quote */
            if(quote.length >120){
                getQuote();
            }else{
                /* get quote */
                $(".quote").html('"'+quote+'"');

                /* get author or unknown */
                if(author) {
                    $(".author").html("-" + author);
                } else {
                    $(".author").html("-unknown");
                }
            }
        });
    }

    /* tweet button */
    $("#tweet").on("click",function(){
        window.open("https://twitter.com/intent/tweet?text="+quote+"-"+author);
    });


    /* click quote for new quote */
    $(".quote").on("click",function(){
        getQuote();
    });


    /* click button for new quote */
    $("#newQuote").on("click",function(){
        getQuote();
    });



});






