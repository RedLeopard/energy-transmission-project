from flask import Flask, render_template, jsonify
from pathlib import Path
import os

BASE_DIR = Path(__file__).parent.resolve()
app = Flask(
    __name__,
    template_folder=str(BASE_DIR / "templates"),
    static_folder=str(BASE_DIR / "static"),
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/status")
def status():
    return jsonify({"status": "ok", "message": "Grid running smoothly", "region": "St. Louis"})

if __name__ == "__main__":
    port = int(os.getenv("PORT", "5050"))
    app.run(host="0.0.0.0", port=port)
