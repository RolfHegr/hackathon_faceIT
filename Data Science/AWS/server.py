from flask import Flask
from flask import request, jsonify
import os
from flask import send_file
import pickle
import requests
import numpy as np


def make_userimg_dir():
    if not os.path.exists("uploads/"):
        os.mkdir("uploads")
    if not os.path.exists("user_images_good/"):
        os.mkdir("user_images_good")
    if not os.path.exists("user_images_bad/"):
        os.mkdir("user_images_bad")


with open("LE_lin_model.pkl", "rb") as pklfile:
    reg = pickle.load(pklfile)

# y_pred = reg.predict(pd.DataFrame([{"physical activity": 3 / 4, "obesity": 22 / 30, "sex": 0, "average_drink": 3}]))

app = Flask(__name__)

ORIGINAL_IMG_DIR = "uploads/"
TRANSFORMED_PLUS_DIR = "user_images_good/"
TRANSFORMED_PRED_DIR = "user_images_bad/"

NGROK_URL = "http://025e-34-105-93-37.ngrok.io"
MEAN_AGE = 77.215
AGE_ADDITION = 10


def get_new_age(physical_activity, obesity, sex, average_drink, age, model):
    mean_age = MEAN_AGE
    age_addition = AGE_ADDITION
    my_stat = np.array([[physical_activity, obesity, sex, average_drink]])
    my_pred_age = model.predict(my_stat)
    age_ratio = (age + age_addition) / my_pred_age
    adjusted_age = ((age + age_addition) / my_pred_age) * mean_age
    return int(round((adjusted_age[0] + age_addition * age_ratio[0] + 5), 0))


@app.route("/predict_age", methods=["GET", "POST"])
def predict_age():
    age = int(request.form.get("age"))
    sex = int(request.form.get("sex"))
    obesity = float(request.form.get("obesity"))
    average_drink = float(request.form.get("average_drink"))
    physical_activity = float(request.form.get("physical_activity"))
    img_name = request.form.get("img_name")
    img_path = ORIGINAL_IMG_DIR + img_name

    predict_age = get_new_age(physical_activity, obesity, sex, average_drink, age, reg)

    img_file1 = {"img_file": open(img_path, "rb")}
    img_file2 = {"img_file": open(img_path, "rb")}
    plus_age = age + 10

    response_img_plus = requests.post(f"{NGROK_URL}?age={plus_age}", files=img_file1)
    response_img_pred = requests.post(f"{NGROK_URL}?age={predict_age}", files=img_file2)

    img_name_transformed_plus = "plus_" + img_name
    img_name_transformed_pred = "pred_" + img_name

    with open(f"{TRANSFORMED_PLUS_DIR}{img_name_transformed_plus}", "wb") as f:
        f.write(response_img_plus.content)

    with open(f"{TRANSFORMED_PRED_DIR}{img_name_transformed_pred}", "wb") as f:
        f.write(response_img_pred.content)

    response_json = jsonify(response={
        "message": f"Image {img_name} has been successfully save to path {img_path}!!",
        "plus_age": plus_age,
        "predict_age": predict_age,
        "good_img_url": f"/get_image?fn={TRANSFORMED_PLUS_DIR}{img_name_transformed_plus}",
        "bad_img_url": f"/get_image?fn={TRANSFORMED_PRED_DIR}{img_name_transformed_pred}",
    })
    return response_json


@app.route("/get_image")
def get_image():
    img_path = request.args.get("fn")
    return send_file(f"{img_path}", mimetype='image/gif')


if __name__ == "__main__":
    make_userimg_dir()
    app.run(host="0.0.0.0",port=8080)
