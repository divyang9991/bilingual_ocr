from flask import Flask, render_template, request, jsonify
import easyocr
import os
import cv2

app = Flask(__name__)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Initialize EasyOCR reader
reader = easyocr.Reader(['en'])  # Add 'gu' for Gujarati

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/upload', methods=['POST'])
def upload_image():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    # Save the uploaded file
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
    file.save(file_path)
    
    image = cv2.imread(file_path)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # EasyOCR expects RGB

    # Preprocess (optional: enhance image quality)
    gray = cv2.cvtColor(image, cv2.COLOR_RGB2GRAY)
    denoised = cv2.fastNlMeansDenoising(gray, h=10)  # Reduce noise

    # Perform OCR
    try:
        result = reader.readtext(denoised, detail=0)
        extracted_text = " ".join(result)  # Combine lines into a single string
        return jsonify({'text': extracted_text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    os.makedirs(UPLOAD_FOLDER, exist_ok=True)
    app.run(debug=True)