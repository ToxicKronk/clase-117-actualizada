from flask import Flask, render_template, url_for, request, jsonify
from text_sentiment_prediction import *

app = Flask(__name__)
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/predict-emotion', methods=["POST"])
def predict_emotion():
    
    # Obtener el texto ingresado del requerimiento POST.
    input_text = request.json.get("text")
    
    if not input_text:      
        # Respuesta para enviar si input_text está indefinido.
        response = {
           "status": "error", 
           "message": "Por favor ingresar algun texto"
        }
        return jsonify(response)
    else: 
        # Respuesta para enviar si input_text no está indefinido.
        emo_predict, emo_symbol = predict(input_text)
        # Enviar respuesta.
        response = {
           "status": "success", 
           "data": {
              "emo_predict": emo_predict,
              "emo_symbol": emo_symbol,
                }
            }
        return jsonify(response)                 
        
       
app.run(debug=True)



    