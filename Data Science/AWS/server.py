from flask import Flask
from flask import request, jsonify
import os
from flask import send_file


def make_userimg_dir():
    if not os.path.exists("user_images/"):
        os.mkdir("user_images")
    if not os.path.exists("user_images_good/"):
        os.mkdir("user_images_good")
    if not os.path.exists("user_images_bad/"):
        os.mkdir("user_images_bad")


app = Flask(__name__)


@app.route("/predict_age", methods=["GET", "POST"])
def predict_age():
    imagefile = request.files['img_file']
    f_path = 'user_images/' + imagefile.filename
    imagefile.save(f_path)

    response_json = jsonify(response={
        "message": f"Image {imagefile.filename} has been successfully save to path {os.getcwd() + f_path}!!",
        "good_img_url": f"/get_image?fn={imagefile.filename}&good=1",
        "bad_img_url": f"/get_image?fn={imagefile.filename}&good=0"
    })
    return response_json


@app.route("/get_image")
def get_image():
    img_genre = request.args.get("good")
    img_name = request.args.get("fn")
    return send_file(f"user_images/{img_name}", mimetype='image/gif')


if __name__ == "__main__":
    make_userimg_dir()
    app.run(host="0.0.0.0", port=8080)
