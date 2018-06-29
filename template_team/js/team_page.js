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
            this.bio = obj.bio;
            this.img = obj.img;
        },
        // function to classify the data
        inject_HTML: function () {
            var row = 0;
            if(this.count % 3 === 0) {
                $(".card_memb").append(`<div class='row row-${this.count}'></div>`);
                row = this.count;                
            }
            $(`row-${row}`).append(`<div class="col-xs-12 col-sm-4"><div class="card"><img class="card-img-top" src="img/${this.img}" alt="${this.img}">`+
                `<div class="card-body"><h4 class="card-title">${this.name}</h4>`+
                `<p class="card-text">${this.bio}</p> </div></div></div>`);
        }
    }
    // Class variable
    Member.count = 0;

    // Compute the json data from AJAX request (jQuery getJSON)
    function compute_JSON(json) {
        console.log(json);
        $.each(json, function(i,value) {
            console.log(i);
            console.log(value);
            $.each(value, function(j,obj) {
                // console.log(j);
                console.log(obj.name);
                var member = Object.create(Member);
                member.init(obj);
                console.log(member);
                member.inject_HTML;
                // $(".card_memb").append(`<div class='row'><div class='col-xs-12 col-sm-4 row-${Member.count}'>C-1</div><div class='col-xs-12 col-sm-4'>C-2</div></div>`);
                console.log(member.count);
                Member.count += 1;
            });
        });
    }

    // Main program
    json_data
});