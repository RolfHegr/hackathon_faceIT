from flask import Flask

app = Flask(__name__)
@app.route("/predict_age")
def predict_age():
    return "You have successfully connected to the server. AWS"


if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8080)