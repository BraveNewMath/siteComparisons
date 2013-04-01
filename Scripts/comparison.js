/// <reference path="jquery-1.9.1.intellisense.js" />
/// <reference path="jquery-ui-1.10.2.js" />
var c = {
    startup: {
        begin: function () {
            var ctx = c.startup;
            ctx.alternatingTbleRowstyles();
            ctx.setupAudioEffectsForHyperlinks();
            ctx.wireupComparisonRowClicks();
            $('.hideOnLoad').hide();



        },
        alternatingTbleRowstyles: function () {
            $('.comparisonTable tr:even').addClass('even');
            $('.comparisonTable tr:odd').addClass('odd');

            //add a style to a specific column
            //$('table th:nth-child(2), table td:nth-child(2)').addClass('comparison');
        },
        wireupComparisonRowClicks: function () {
            $('.comparisonTable tr[contentdiv]').click(function (e) {

                //assign title header using h3 tag, and if not present, use the title attibute of the div
                var mytitle = $('#' + $(this).attr('contentdiv') + ' h3').hide().text();
                if (!mytitle)
                    mytitle = $('#' + $(this).attr('contentdiv')).attr('title');
                
                //show dialog  message
                $('#' + $(this).attr('contentdiv')).dialog({
                    title: mytitle,
                    modal:true,
                    width: 600,
                    open: function (event, ui) {
                        //alert('dialog is opened!');
                        //debugger;
                        //if ($(this).width() > 600) {
                        //    $(this).width(600);
                        //}
                    }
                });
            }).addClass('clickableRow');
        },
        setupAudioEffectsForHyperlinks:function(){
            
        }
    }
    
};

$(c.startup.begin);