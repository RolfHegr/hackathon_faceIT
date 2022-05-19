from flask import Flask, request

app = Flask(__name__)


@app.route("/form", methods=["GET", "POST"])
def main_page():
    print("form:", request.form)
    print("values:", request.values)
    print("data:", request.data)
    print("args:", request.args)
    return "yes"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
