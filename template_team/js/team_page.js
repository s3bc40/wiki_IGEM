$(function() {
    // Load json data
    var json_data = $.getJSON("json/member.json", function(data) {
        compute_JSON(data)
    })
        .done(function() {
          console.log( "success" );
        })
        .fail(function() {
          console.log( "error : check the path or filename" );
        });
    
    // Member class : to create instances (members)
    var Member = {
        init: function(obj) {
            this.name = obj.name;
            this.job = obj.job;
            this.bio = obj.bio;
            this.img = obj.img;
            this.color = obj.color;
        },
        // function to classify the data
        inject_HTML: function () {
            var content_HTML = "";
            content_HTML += `<div class="col-xs-12 col-sm-4" ><div id="${this.name}" class="card">`+
                `<img class="card-img-top" src="img/${this.img}" alt="${this.img}">`+
                 `<div class="card-body"><h4 class="card-title memb-name">${this.name}</h4>`+
                 `<i class="card-text">${this.job}</i></div></div></div>`;
            return content_HTML;
        }
    }
    // Class variable
    Member.count = 0;

    // Compute the json data from AJAX request (jQuery getJSON)
    function compute_JSON(json) {
        console.log(json);
        $.each(json, function(i,value) {
            // console.log(i);
            // console.log(value);
            var row = 0;
            $.each(value, function(j,obj) {
                // console.log(j);
                // console.log(obj.name);
                var member = Object.create(Member);
                member.init(obj);
                // console.log(member)
                if(Member.count % 3 === 0) {
                    $(".card-memb").append(`<div class='row row-${Member.count}'></div>`);
                    row = Member.count;                
                }
                $(`.row-${row}`).append(member.inject_HTML());

                // Store data in HTML DOM
                var container_member = `#${member.name}`;
                $(container_member).data(member);
                console.log($(container_member).data("name"))
                Member.count += 1;
            });
        });
    }

    // Animation on mouseover : change color of cards
    function color_change() {
        var obj = $(this).data();
        $(`#${obj.name}`).find(".card-body")
            .css({
                "background-color":`${obj.color}`, 
                "color":"#ffffff"});
        //console.log(obj);
    }
    function color_default() {
        var obj = $(this).data();
        $(`#${obj.name}`).find(".card-body")
            .removeAttr("style");
    }

    // Main program
    json_data;
    $(document).on("mouseenter", ".card", color_change);
    $(document).on("mouseleave", ".card", color_default);
});