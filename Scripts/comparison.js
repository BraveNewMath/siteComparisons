/// <reference path="jquery-1.9.1.intellisense.js" />
var c = {
    startup: {
        begin: function () {
            var ctx = c.startup;
            ctx.alternatingTbleRowstyles();
            ctx.setupAudioEffectsForHyperlinks();
        },
        alternatingTbleRowstyles: function () {
            $('.comparisonTable tr:even').addClass('even');
            $('.comparisonTable tr:odd').addClass('odd');
        },
        setupAudioEffectsForHyperlinks:function(){
            
        }
    }
    
};

$(c.startup.begin);