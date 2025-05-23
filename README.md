# Bilingual OCR for English and Gujarati

This project is an Optical Character Recognition (OCR) system capable of extracting and recognizing text from images in both English and Gujarati languages. It is being developed as part of the Student Startup and Innovation Policy (SSIP) initiative.

## 📌 Overview

The aim of this project is to provide a lightweight, multilingual OCR solution that works efficiently on low-resource machines—particularly in rural or government offices where outdated hardware is still in use.

## 🔍 Features

- Detects and extracts printed text from both English and Gujarati image inputs.
- Achieves over 90% recognition accuracy with Tesseract and EasyOCR.
- Includes text segmentation to improve recognition of regional scripts.
- Optimized for low memory usage and legacy system compatibility.

## 🛠️ Technologies Used

- **Python** — Core language for scripting and implementation.
- **Tesseract OCR** — Primary OCR engine for text extraction.
- **EasyOCR** — Used for improved multilingual support and lightweight recognition.
- **OpenCV** — For image preprocessing, including segmentation and noise removal.

## 🚀 Getting Started

### Prerequisites

- Python 3.7+
- pip

### Installation

```bash
git clone https://github.com/PruthvirajPasee0/bilingual_ocr.git
cd bilingual_ocr
pip install -r requirements.txt
