var cx = 0,
        cy = 0;

    var color1 = new Array(new Array({
            r: 241,
            g: 0,
            b: 0
        }, {
            r: 255,
            g: 72,
            b: 72
        }, {
            r: 239,
            g: 107,
            b: 107
        }, {
            r: 255,
            g: 191,
            b: 191
        }, {
            r: 255,
            g: 255,
            b: 255
        }),
        new Array({
            r: 12,
            g: 152,
            b: 228
        }, {
            r: 81,
            g: 188,
            b: 246
        }, {
            r: 100,
            g: 195,
            b: 247
        }, {
            r: 195,
            g: 232,
            b: 252
        }, {
            r: 255,
            g: 255,
            b: 255
        }),
        new Array({
            r: 202,
            g: 228,
            b: 12
        }, {
            r: 226,
            g: 246,
            b: 81
        }, {
            r: 229,
            g: 247,
            b: 100
        }, {
            r: 245,
            g: 252,
            b: 195
        }, {
            r: 255,
            g: 255,
            b: 255
        }));
    var color2 = new Array(new Array({
            r: 255,
            g: 0,
            b: 0
        }, {
            r: 228,
            g: 225,
            b: 0
        }, {
            r: 169,
            g: 0,
            b: 231
        }, {
            r: 255,
            g: 0,
            b: 148
        }, {
            r: 255,
            g: 255,
            b: 255
        }),
        new Array({
            r: 0,
            g: 153,
            b: 231
        }, {
            r: 194,
            g: 0,
            b: 231
        }, {
            r: 255,
            g: 118,
            b: 0
        }, {
            r: 141,
            g: 227,
            b: 0
        }, {
            r: 255,
            g: 255,
            b: 255
        }),
        new Array({
            r: 255,
            g: 251,
            b: 125
        }, {
            r: 0,
            g: 206,
            b: 223
        }, {
            r: 247,
            g: 154,
            b: 255
        }, {
            r: 255,
            g: 165,
            b: 106
        }, {
            r: 255,
            g: 255,
            b: 255
        }));
    var color3 = new Array(new Array({
            r: 0,
            g: 94,
            b: 226
        }, {
            r: 255,
            g: 255,
            b: 255
        }),
        new Array({
            r: 231,
            g: 234,
            b: 0
        }, {
            r: 255,
            g: 255,
            b: 255
        }),
        new Array({
            r: 255,
            g: 109,
            b: 0
        }, {
            r: 255,
            g: 255,
            b: 255
        }));
    var color4 = new Array(
        new Array({
            r: 255,
            g: 0,
            b: 0
        }),
        new Array({
            r: 0,
            g: 94,
            b: 226
        }),
        new Array({
            r: 214,
            g: 214,
            b: 214
        }),
        new Array({
            r: 0,
            g: 168,
            b: 0
        }),
        new Array({
            r: 231,
            g: 234,
            b: 0
        }),
        new Array({
            r: 255,
            g: 118,
            b: 0
        }),
        new Array({
            r: 0,
            g: 205,
            b: 255
        }),
        new Array({
            r: 182,
            g: 255,
            b: 125
        }),
        new Array({
            r: 255,
            g: 0,
            b: 123
        })
    );


    jQuery(document).ready(function() {
        //  
        $('body').firemaks({
            color: 'random',
            type: 'random',
            color_child: 'inherit',
            type_child: 'random',
            boom_count: 4
        });

        $(document).mousemove(function(e) {
            cx = e.pageX;
            cy = e.pageY;
        });
        $('body').on('click', function() {
            $('body').firemaks('fire', cx, cy, 40, color1 /*'full_random'*/ , 2, 1.5);
        });

        $('#colorset').buttonset();
        $('#colorset input').on('click', function() {
            setcolors($(this).val());
        });

        function setcolors(val) {
            switch (val) {
                case '0':
                    $('body').firemaks('setcolors', color1);
                    $('#colorsetdesc').html('<img src="images/fw_colorset_1.png"> <br/> * each row - one firework.');
                    $('#descclrset').show();
                    break;
                case '1':
                    $('body').firemaks('setcolors', color2);
                    $('#colorsetdesc').html('<img src="images/fw_colorset_2.png"> <br/> * each row - one firework.');
                    $('#descclrset').show();
                    break;
                case '2':
                    $('body').firemaks('setcolors', color3);
                    $('#colorsetdesc').html('<img src="images/fw_colorset_3.png"> <br/> * each row - one firework.');
                    $('#descclrset').show();
                    break;
                case '3':
                    $('body').firemaks('setcolors', color4);
                    $('#colorsetdesc').html('<img src="images/fw_colorset_4.png"> <br/> * each <b>color</b> - <b>one firework</b>.');
                    $('#descclrset').show();
                    break;
                case '4':
                    $('body').firemaks('setcolors', 'random');
                    $('#descclrset').hide();
                    break;
                case '5':
                    $('body').firemaks('setcolors', 'full_random');
                    $('#descclrset').hide();
                    break;
                default:
                    $('body').firemaks('setcolors', color1);
                    $('#colorsetdesc').html('<img src="images/fw_colorset_1.png"> <br/> * each row - one firework.');
                    $('#descclrset').show();
                    break;
            }
        }
        setcolors($(':radio[name=colorset]').filter(':checked').val());


        //  
        $('#typeset').buttonset();
        $('#typeset input').on('click', function() {
            settype($(this).val(), $(':radio[name=typeset_child]').filter(':checked').val());
        });
        $('#typeset_child').buttonset();
        $('#typeset_child input').on('click', function() {
            settype($(':radio[name=typeset]').filter(':checked').val(), $(this).val());
        });

        function settype(val, val2) {
            var vl1 = null,
                vl2 = null;
            switch (val) {
                case '0':
                    vl1 = 'random';
                    break;
                case '1':
                    vl1 = 1;
                    break;
                case '2':
                    vl1 = 2;
                    break;
                case '3':
                    vl1 = 3;
                    break;
                default:
                    vl1 = 'random';
                    break;
            }
            switch (val2) {
                case '0':
                    vl2 = 'random';
                    break;
                case '1':
                    vl2 = 1;
                    break;
                case '2':
                    vl2 = 2;
                    break;
                case '3':
                    vl2 = 3;
                    break;
                case '4':
                    vl2 = 'inherit';
                    break;
                default:
                    vl2 = 'random';
                    break;
            }
            $('body').firemaks('settypes', vl1, vl2);
        }

        settype($(':radio[name=typeset]').filter(':checked').val(), $(':radio[name=typeset_child]').filter(':checked').val());

        $('#sound').buttonset();
        $('#sound input').on('click', function() {
            setsound($(this).val(), $(':radio[name=sound]').filter(':checked').val());
        });

        function setsound(val) {
            switch (val) {
                case '0':
                    $('body').firemaks('setsounds');
                    break;
                case '1':
                    $('body').firemaks('setsounds', 'sfx/boom.mp3', 'sfx/crackles.wav');
                    break;
                default:
                    $('body').firemaks('setsounds');
                    break;
            }
        }
        setsound($(':radio[name=sound]').filter(':checked').val());
    });