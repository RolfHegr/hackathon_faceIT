from flask import Flask
from flask import request, jsonify
from PIL import Image
from flask import send_file
import os


def make_userimg_dir():
    if not os.path.exists("user_images/"):
        os.mkdir("user_images")


app = Flask(__name__)


@app.route("/predict_age", methods=["GET", "POST"])
def predict_age():
    imagefile = request.files['img_file']
    f_path = 'user_images/' + imagefile.filename
    imagefile.save(f_path)

    response_json = jsonify(response={
        "message": f"Image {imagefile.filename} has been successfully save to path {os.getcwd() + f_path}!!",
        "good_img_url": f"{os.getcwd() + f_path}",
        "bad_img_url": f"{os.getcwd() + f_path}"
    })
    return response_json


if __name__ == "__main__":
    make_userimg_dir()
    app.run(port=8080)
