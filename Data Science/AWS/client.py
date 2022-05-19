import requests
img_file = {"img_file": open("user_images/pengmin.png","rb")}

print(requests.post("http://d34b-35-233-146-57.ngrok.io",files=img_file).)