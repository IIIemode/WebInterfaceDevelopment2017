import './styles';
import $ from "jquery";


$(document).ready(function() {
    const arrow = $('.main_nav');
    const menu = $('.main nav');
    const content = $('.main_content');
    const image = $('.main_image');

    if (menu.css('display') == 'block') {
        arrow.css({
            'left': menu.width(),
            'transform': ''
        });
    } else {
        arrow.css({
            'left': 0,
            'transform': 'rotate(180deg)'
        });
    }

    $(window).resize(function(){
        if (menu.css('display') == 'block') {
            arrow.css({
                'left': menu.width(),
                'transform': ''
            });
            content.css({
                'width': '55%',
                'left': menu.width()
            });
        } else {
            arrow.css({
                'left': 0,
                'transform': 'rotate(180deg)'
            });
            if (image.css('display') == 'none') {
                content.css({
                    'width': '100%',
                    'left': 0
                });
            } else {
                content.css({
                    'width': '80%',
                    'left': 0
                });
            }
        }
    });

    arrow.click(function() {
        menu.toggle();
        if (menu.css('display') == 'none') {
            arrow.css({
                'left': 0,
                'transform': 'rotate(180deg)'
            });
            content.css({
                'width': '75%',
                'left': '0'
            });
        } else {
            arrow.css({
                'left': menu.width(),
                'transform': ''
            });
            content.css({
                'width': '55%',
                'left': '20%'
            });
        }
        if (image.css('display') == 'none') {
            content.css({
                'width': '100%',
                'left': 0
            });
        }
    });
});


