# import os
# from flask import Flask, request, jsonify
# import requests

# app = Flask(__name__)

# OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")  # Store the key as an environment variable

# @app.route('/chat', methods=['POST'])
# def chat():
#     user_message = request.json.get("message", "")
#     headers = {
#         "Authorization": f"Bearer {OPENAI_API_KEY}",
#         "Content-Type": "application/json"
#     }
#     data = {
#         "model": "gpt-3.5-turbo",  # or "gpt-4" if using that model
#         "messages": [{"role": "user", "content": user_message}]
#     }
#     response = requests.post(
#         "https://api.openai.com/v1/chat/completions",
#         headers=headers,
#         json=data
#     )
#     response_json = response.json()
#     return jsonify(response_json["choices"][0]["message"]["content"])

# if __name__ == '__main__':
#     app.run(debug=True)
