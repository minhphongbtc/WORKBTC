var ComponentsFormTools = function () {

    var handleTwitterTypeahead = function () {

        // Example #1
        // instantiate the bloodhound suggestion engine
        var numbers = new Bloodhound({
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.num);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                {num: 'metronic'},
                {num: 'keenthemes'},
                {num: 'metronic theme'},
                {num: 'metronic template'},
                {num: 'keenthemes team'}
            ]
        });

        // initialize the bloodhound suggestion engine
        numbers.initialize();

        // instantiate the typeahead UI
        if (Metronic.isRTL()) {
            $('#typeahead_example_1').attr("dir", "rtl");
        }
        $('#typeahead_example_1').typeahead(null, {
            displayKey: 'num',
            hint: (Metronic.isRTL() ? false : true),
            source: numbers.ttAdapter()
        });

        // Example #2
        var countries = new Bloodhound({
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: 'demo/typeahead_countries.json',
                filter: function (list) {
                    return $.map(list, function (country) {
                        return {name: country};
                    });
                }
            }
        });

        countries.initialize();

        if (Metronic.isRTL()) {
            $('#typeahead_example_2').attr("dir", "rtl");
        }
        $('#typeahead_example_2').typeahead(null, {
            name: 'typeahead_example_2',
            displayKey: 'name',
            hint: (Metronic.isRTL() ? false : true),
            source: countries.ttAdapter()
        });

        // Example #3
        var custom = new Bloodhound({
            datumTokenizer: function (d) {
                return d.tokens;
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: 'demo/typeahead_custom.php?query=%QUERY'
        });

        custom.initialize();

        if (Metronic.isRTL()) {
            $('#typeahead_example_3').attr("dir", "rtl");
        }
        $('#typeahead_example_3').typeahead(null, {
            name: 'datypeahead_example_3',
            displayKey: 'value',
            source: custom.ttAdapter(),
            hint: (Metronic.isRTL() ? false : true),
            templates: {
                suggestion: Handlebars.compile([
                    '<div class="media">',
                    '<div class="pull-left">',
                    '<div class="media-object">',
                    '<img src="{{img}}" width="50" height="50"/>',
                    '</div>',
                    '</div>',
                    '<div class="media-body">',
                    '<h4 class="media-heading">{{value}}</h4>',
                    '<p>{{desc}}</p>',
                    '</div>',
                    '</div>',
                ].join(''))
            }
        });





    }

    var handleTwitterTypeaheadModal = function () {

        // Example #1
        // instantiate the bloodhound suggestion engine
        var numbers = new Bloodhound({
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.num);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: [
                {num: 'metronic'},
                {num: 'keenthemes'},
                {num: 'metronic theme'},
                {num: 'metronic template'},
                {num: 'keenthemes team'}
            ]
        });

        // initialize the bloodhound suggestion engine
        numbers.initialize();

        // instantiate the typeahead UI
        if (Metronic.isRTL()) {
            $('#typeahead_example_modal_1').attr("dir", "rtl");
        }
        $('#typeahead_example_modal_1').typeahead(null, {
            displayKey: 'num',
            hint: (Metronic.isRTL() ? false : true),
            source: numbers.ttAdapter()
        });

        // Example #2
        var countries = new Bloodhound({
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.name);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            limit: 10,
            prefetch: {
                url: 'demo/typeahead_countries.json',
                filter: function (list) {
                    return $.map(list, function (country) {
                        return {name: country};
                    });
                }
            }
        });

        countries.initialize();

        if (Metronic.isRTL()) {
            $('#typeahead_example_modal_2').attr("dir", "rtl");
        }
        $('#typeahead_example_modal_2').typeahead(null, {
            name: 'typeahead_example_modal_2',
            displayKey: 'name',
            hint: (Metronic.isRTL() ? false : true),
            source: countries.ttAdapter()
        });

        // Example #3
        var custom = new Bloodhound({
            datumTokenizer: function (d) {
                return d.tokens;
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            remote: 'demo/typeahead_custom.php?query=%QUERY'
        });

        custom.initialize();


        // Example #4

    }

    var handleBootstrapSwitch = function () {

        $('.switch-radio1').on('switch-change', function () {
            $('.switch-radio1').bootstrapSwitch('toggleRadioState');
        });

        // or
        $('.switch-radio1').on('switch-change', function () {
            $('.switch-radio1').bootstrapSwitch('toggleRadioStateAllowUncheck');
        });

        // or
        $('.switch-radio1').on('switch-change', function () {
            $('.switch-radio1').bootstrapSwitch('toggleRadioStateAllowUncheck', false);
        });

    }

    var handleBootstrapTouchSpin = function () {

        $("#touchspin_demo1").TouchSpin({
            buttondown_class: 'btn green',
            buttonup_class: 'btn green',
            min: -1000000000,
            max: 1000000000,
            stepinterval: 50,
            maxboostedstep: 10000000,
            prefix: '$'
        });

        $("#touchspin_demo2").TouchSpin({
            buttondown_class: 'btn blue',
            buttonup_class: 'btn blue',
            min: 0,
            max: 100,
            step: 0.1,
            decimals: 2,
            boostat: 5,
            maxboostedstep: 10,
            postfix: '%'
        });

        $("#touchspin_demo3").TouchSpin({
            buttondown_class: 'btn green',
            buttonup_class: 'btn green',
            prefix: "$",
            postfix: "%"
        });
    }




    var handleTagsInput = function () {
        if (!jQuery().tagsInput) {
            return;
        }
        $('#tags_1').tagsInput({
            width: 'auto',
            'onAddTag': function () {
                //alert(1);
            },
        });
        $('#tags_2').tagsInput({
            width: 300
        });
    }



    var handleIPAddressInput = function () {
        $('#input_ipv4').ipAddress();
        $('#input_ipv6').ipAddress({
            v: 6
        });
    }

    var handlePasswordStrengthChecker = function () {
        var initialized = false;
        var input = $("#password_strength");

        input.keydown(function () {
            if (initialized === false) {
                // set base options
                input.pwstrength({
                    raisePower: 1.4,
                    minChar: 8,
                    verdicts: ["Weak", "Normal", "Medium", "Strong", "Very Strong"],
                    scores: [17, 26, 40, 50, 60]
                });

                // add your own rule to calculate the password strength
                input.pwstrength("addRule", "demoRule", function (options, word, score) {
                    return word.match(/[a-z].[0-9]/) && score;
                }, 10, true);

                // set as initialized 
                initialized = true;
            }
        });
    }

    var handleUsernameAvailabilityChecker1 = function () {
        var input = $("#username1_input");

        $("#username1_checker").click(function (e) {
            var pop = $(this);

            if (input.val() === "") {
                input.closest('.form-group').removeClass('has-success').addClass('has-error');

                pop.popover('destroy');
                pop.popover({
                    'placement': (Metronic.isRTL() ? 'left' : 'right'),
                    'html': true,
                    'container': 'body',
                    'content': 'Please enter a username to check its availability.',
                });
                // add error class to the popover
                pop.data('bs.popover').tip().addClass('error');
                // set last poped popover to be closed on click(see Metronic.js => handlePopovers function)     
                Metronic.setLastPopedPopover(pop);
                pop.popover('show');
                e.stopPropagation(); // prevent closing the popover

                return;
            }

            var btn = $(this);

            btn.attr('disabled', true);

            input.attr("readonly", true).
                    attr("disabled", true).
                    addClass("spinner");

            $.post('demo/username_checker.php', {
                username: input.val()
            }, function (res) {
                btn.attr('disabled', false);

                input.attr("readonly", false).
                        attr("disabled", false).
                        removeClass("spinner");

                if (res.status == 'OK') {
                    input.closest('.form-group').removeClass('has-error').addClass('has-success');

                    pop.popover('destroy');
                    pop.popover({
                        'html': true,
                        'placement': (Metronic.isRTL() ? 'left' : 'right'),
                        'container': 'body',
                        'content': res.message,
                    });
                    pop.popover('show');
                    pop.data('bs.popover').tip().removeClass('error').addClass('success');
                } else {
                    input.closest('.form-group').removeClass('has-success').addClass('has-error');

                    pop.popover('destroy');
                    pop.popover({
                        'html': true,
                        'placement': (Metronic.isRTL() ? 'left' : 'right'),
                        'container': 'body',
                        'content': res.message,
                    });
                    pop.popover('show');
                    pop.data('bs.popover').tip().removeClass('success').addClass('error');
                    Metronic.setLastPopedPopover(pop);
                }

            }, 'json');

        });
    }

    var handleUsernameAvailabilityChecker2 = function () {
        $("#username2_input").change(function () {
            var input = $(this);

            if (input.val() === "") {
                input.closest('.form-group').removeClass('has-error').removeClass('has-success');
                $('.fa-check, fa-warning', input.closest('.form-group')).remove();

                return;
            }

            input.attr("readonly", true).
                    attr("disabled", true).
                    addClass("spinner");

            $.post('demo/username_checker.php', {
                username: input.val()
            }, function (res) {
                input.attr("readonly", false).
                        attr("disabled", false).
                        removeClass("spinner");

                // change popover font color based on the result
                if (res.status == 'OK') {
                    input.closest('.form-group').removeClass('has-error').addClass('has-success');
                    $('.fa-warning', input.closest('.form-group')).remove();
                    input.before('<i class="fa fa-check"></i>');
                    input.data('bs.popover').tip().removeClass('error').addClass('success');
                } else {
                    input.closest('.form-group').removeClass('has-success').addClass('has-error');
                    $('.fa-check', input.closest('.form-group')).remove();
                    input.before('<i class="fa fa-warning"></i>');

                    input.popover('destroy');
                    input.popover({
                        'html': true,
                        'placement': (Metronic.isRTL() ? 'left' : 'right'),
                        'container': 'body',
                        'content': res.message,
                    });
                    input.popover('show');
                    input.data('bs.popover').tip().removeClass('success').addClass('error');

                    Metronic.setLastPopedPopover(input);
                }

            }, 'json');

        });
    }

    return {
        //main function to initiate the module
        init: function () {
            handleTwitterTypeahead();
            handleTwitterTypeaheadModal();

            handleBootstrapSwitch();
            handleBootstrapTouchSpin();
            handleTagsInput();
            handleIPAddressInput();
            handlePasswordStrengthChecker();
            handleUsernameAvailabilityChecker1();
            handleUsernameAvailabilityChecker2();
        }
    };

}();