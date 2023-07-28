//Crear la variable date - (fecha).
var date = new Date()
var o_date = "fecha:"+ date.toLocaleDateString();

//Cargar HTML DOM.
$(document).ready(function(){
    $("#o_date").html(o_date)
})

//Definir la variable para almacenar la emoción predecida.
var emo_predicted

//HTML-->JavaScript--->Flask.
//Flask--->JavaScript--->HTML.

//Selector jQuery y la acción click.

$(function () {
    $("#predict_button").click(function () {
        var input_data = {
            "text" : $("#text").val()
        }
        //Llamada a AJAX 

        $.ajax({
            type:"POST", 
            url:"/predict-emotion",
            data:JSON.stringify(input_data),
            dataType:"json",
            contentType:"application/json",
            success:function(result)
              {
                var emo_predict = result.data.emo_predict
                var emo_symbol =  result.data.emo_symbol
                $("#prediction").html(emo_predict)
                $("#prediction").css("display", "block")
                $("#emo_img_url").html("src", emo_symbol)
                $("#emo_img_url").css("display", "block")                
            },
            //Función error 
            error:function(result){
                alert(result.responseJSON.message)
            }
        });
    });
})

