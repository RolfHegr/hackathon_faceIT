from flask import Flask

app = Flask(__name__)
@app.route("/predict_age")
def predict_age():
    return "You have successfully connected to the server. AWS"


if __name__ == "__main__":
    app.run(port=8080)