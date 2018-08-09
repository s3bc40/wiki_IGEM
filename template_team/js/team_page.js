$(function() {
    // Load json data
    // var json_data = $.getJSON("json/member.json", function(data) {
    //     compute_JSON(data)
    // })
    //     .done(function() {
    //       console.log( "success" );
    //     })
    //     .fail(function() {
    //       console.log( "error : check the path or filename" );
    //     });
    
    // // Member class : to create instances (members)
    // var Member = {
    //     init: function(obj) {
    //         this.name = obj.name;
    //         this.job = obj.job;
    //         this.bio = obj.bio;
    //         this.img = obj.img;
    //         this.color = obj.color;
    //     },
    //     // function to classify the data
    //     inject_HTML: function () {
    //         var content_HTML = "";
    //         content_HTML += `<div class="col-xs-12 col-sm-4" ><div id="${this.name}" class="card">`+
    //             `<img class="card-img-top" src="img/${this.img}" alt="${this.img}">`+
    //              `<div class="card-body"><h4 class="card-title memb-name">${this.name}</h4>`+
    //              `<i class="card-text">${this.job}</i></div></div></div>`;
    //         return content_HTML;
    //     }
    // }
    // Class variable
    // Member.count = 0;

    // // Compute the json data from AJAX request (jQuery getJSON)
    // function compute_JSON(json) {
    //     console.log(json);
    //     $.each(json, function(i,value) {
    //         // console.log(i);
    //         // console.log(value);
    //         var row = 0;
    //         $.each(value, function(j,obj) {
    //             // console.log(j);
    //             // console.log(obj.name);
    //             var member = Object.create(Member);
    //             member.init(obj);
    //             // console.log(member)
    //             if(Member.count % 3 === 0) {
    //                 $(".card-memb").append(`<div class='row row-${Member.count}'></div>`);
    //                 row = Member.count;                
    //             }
    //             $(`.row-${row}`).append(member.inject_HTML());

    //             // Store data in HTML DOM
    //             var container_member = `#${member.name}`;
    //             $(container_member).data(member);
    //             console.log($(container_member).data("name"))
    //             Member.count += 1;
    //         });
    //     });
    // }

    // Animation on mouseover : change color of cards
    function color_change() {
        if($(this).find(".hidden-text").hasClass("team-toggled")) return;
        else {
            var color_list = ["#8A2BE2"," #A52A2A","#D2691E"," #6495ED","#FF1493","#228B22","#FF69B4"];
            var random_color = color_list[Math.floor(Math.random()*color_list.length)];
            $(this).find(".rectangle")
                .css({
                    backgroundColor: random_color,
                    color: "#ffffff"});
            // var card_body = $(`#${obj.name}`).find(".card-body");
            // card_body.animate({
            //     backgroundColor: obj.color, 
            //     color: "#ffffff"
            // }, 500);
            //console.log(obj);
        }
    }
    function color_default() {
        if($(this).find(".hidden-text").hasClass("team-toggled")) return;
        $(this).find(".rectangle")
            .css({
                backgroundColor: "#ffffff",
                color: "#000000"});
    }
    
    //Animation on click card
    function banner_on() {
        // var card_img = $(`#${obj.name}`).find(".card-img-top");
        // var card_text = $(`#${obj.name}`).find("i");
        // if($(this).hasClass("team-toggled")) {
        //     card_img.slideToggle();
        //     card_text.text(`${obj.job}`);
        //     $(this).removeClass("team-toggled");
        // }else{
        //     card_img.slideToggle();
        //     setTimeout(function() {
        //         card_text.text(`${obj.bio}`);
        //     }, 200);
        //     $(this).addClass("team-toggled");
        // }
        if($(this).find(".hidden-text").hasClass("team-toggled")) {
            var actual_background = $(this).find(".rectangle").css("background-color");
            $(this).removeAttr("style")
            $(this).find(".rectangle")
                .removeAttr("style")
                .css({
                    backgroundColor: actual_background,
                    color: "#ffffff"
                    });    
            $(this).find(".hidden-text").removeClass("team-toggled")
                .fadeToggle();
        }else{
            var bg_color = $(this).find(".rectangle").css("background-color");
            var rectangle_height = $(this).find(".rectangle").css("height");
            var card_height = $(this).css("height");
            $(this).find(".rectangle")
                .css({
                    top: `0%`,
                    backgroundColor: bg_color,
                    color: "#ffffff"
                    });
            $(this).find(".hidden-text").fadeToggle(1000)
                .addClass("team-toggled");
        }
    }

    // Main program

    $(document).on("click", ".card", banner_on);
    $(document).on("mouseenter", ".card", color_change);
    $(document).on("mouseleave", ".card", color_default);
});