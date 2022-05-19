import requests
img_file = {"img_file": open("pengmin.png","rb")}

# print(requests.post("http://025e-34-105-93-37.ngrok.io/?age=44",files=img_file))

print(requests.post("http://127.0.0.1",))