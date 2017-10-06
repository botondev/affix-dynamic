;$(function () {
    /**
     * based on https://www.w3schools.com/bootstrap/bootstrap_ref_js_affix.asp
     * Fixes required elements to stick to the top of the screen once the window is scrolled down enough
     * 
     * TODO: By default it is using  the bootstrap "affix" and "affix-top" classes, but we need an init method or optional attributes to inject the desired class names on init for each entity.
     * TODO: Write example pages that demonstrates the available options with this app.
     */

    var affixDynamicAttribute = "affix-dynamic-for";
    var affixDynamicHookAttribute = "affix-dynamic-hook-for";

    var $elements = $("[" + affixDynamicAttribute + "]");
    //var hooks = $("[" + affixDynamicHookAttribute + "]");

    affixIDs = [];
    hooks = [];
    for (var i = 0; i < $elements.length; i++) {
        affixIDs[i] = $elements[i].getAttribute(affixDynamicAttribute);
        hooks[i] = $("[" + affixDynamicHookAttribute + "=" + affixIDs[i] + "]")[0];

        //in that way we look up the references only once when the page is loading
        //and not on every single time we scroll.
        //Also we have to wrap it to not reference the inner loop i value forever
        //but create a new boundary value to have its own reference with the passed
        // value of i
        //Bb. 05.10.2017
        (function subscribe(index){
            $(window).scroll(function () {
                console.log("scrolling with index = " + index);

                console.log("TOP VALUE = " + hooks[index].getBoundingClientRect().top);

                if (hooks[index].getBoundingClientRect().top <= 0) {
                    console.log("move to top with index = " + index);
                    $("#"+affixIDs[index]).removeClass("affix-top").addClass("affix");
                } else {
                    console.log("remove from top with index = " + index);
                    $("#"+affixIDs[index]).removeClass("affix").addClass("affix-top");
                }
            });
        })(i);   
    }

    /*
    //Example html view
    <div data-spy="scroll" data-target="#itinerary-nav-tabs" style="position:relative; height: auto;">

    <div class="bg-dark-grey">

        <div class="itin-nav">
            <div class="tour-nav hidden-xs">

                <span affix-dynamic-hook-for="tour-nav" id="tour-nav-original-position"></span>

                <ul class="nav nav-tabs nav-stacked nav-justified affix-top" @*data-spy="affix" data-offset-top*@ affix-dynamic-for="tour-nav" id="tour-nav">

                        <li class="active"><a smooth-jump="" role="tab" href="#itinerary"><span class="fa fa-info margin-10-bottom fa-2x visible-sm-block visible-md-block visible-lg-block"></span> Itinerary</a></li>
                        <li><a smooth-jump="" role="tab" href="#tour-accommodation"><span class="fa fa-hotel margin-10-bottom fa-2x visible-sm-block visible-md-block visible-lg-block"></span> Hotel</a></li>
                        <li><a smooth-jump="" role="tab" href="#travel-option"><span class="fa fa-bus fa-2x margin-10-bottom visible-sm-block visible-md-block visible-lg-block"></span> Travel</a></li>
                        <li><a smooth-jump="" role="tab" href="#tour-travellers-tales"><span class="fa fa-comments fa-x2 margin-10-bottom fa-2x visible-sm-block visible-md-block visible-lg-block"></span> Reviews</a></li>
                        <li><a smooth-jump="" role="tab" href="/"><span class="fa fa-calendar margin-10-bottom fa-2x visible-sm-block visible-md-block visible-lg-block"></span> Departure Dates</a></li>

                    </ul>


                <div class="clearfix"></div>

            </div>
        </div>
    </div>

</div>
    */

    //we need come css to make the trick visible
    //.affix
    //.affix-top












    // this is only a prototype of the new version above
    ////tour-nav-original-position
    //var elPos = document.getElementById("tour-nav-original-position");
    //var el = document.getElementById("tour-nav");

    //var $el = $(el);
    //var $elPos = $(elPos);
    //$(window).scroll(function () {
    //    if (elPos.getBoundingClientRect().top <= 0) {
    //        $el.removeClass("affix-top").addClass("affix");
    //    }
    //    else {
    //        $el.removeClass("affix").addClass("affix-top");
    //    }

    //});
});