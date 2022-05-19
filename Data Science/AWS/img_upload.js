const express = require("express");
const multer = require("multer");
const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});
const upload = multer({ storage: storage });
app.use(express.static(__dirname + "/public"));
app.use("/uploads", express.static("uploads"));
app.post("/uploadimg", upload.single("img_url"), function (req, res, next) {
    console.log(JSON.stringify(req.file));
    return res
        .status(200)
        .send(`image sucessfully stored locally at ${req.file.path}`);
});
app.post("/ajax/imgupload", (req, res) => {
    res.status(200).send("server working");
});
app.listen(9000, "0.0.0.0", () => {
    console.log("server is successfully running at 9000! ");
});