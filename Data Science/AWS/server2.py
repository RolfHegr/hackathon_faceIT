from flask import Flask

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def main_page():
  return "yes"

if __name__=="__main__":
    app.run(host="0.0.0.0", port=7070)