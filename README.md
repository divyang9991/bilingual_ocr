# 🔠 Bilingual OCR System – English & Gujarati Text Recognition

![Python](https://img.shields.io/badge/Python-3.7+-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![OpenCV](https://img.shields.io/badge/OpenCV-Preprocessing-red.svg)
![Tesseract](https://img.shields.io/badge/OCR-Tesseract-yellowgreen.svg)
![EasyOCR](https://img.shields.io/badge/OCR-EasyOCR-lightblue.svg)

> 🧠 A high-accuracy, low-resource bilingual OCR engine for English and Gujarati, built under the **Student Startup and Innovation Policy (SSIP)** initiative. Designed to digitize multilingual documents with improved text alignment, segmentation, and character recognition accuracy.

---

## 📌 Project Summary

This project is a custom-built **Optical Character Recognition (OCR)** system that extracts printed text from **images or scanned documents** in both **English** and **Gujarati**. With a strong focus on **lightweight deployment** and **low-resource compatibility**, this system is ideal for use in:

- Rural offices with legacy hardware
- Government digitization efforts
- Regional language text processing
- Form digitization and automation

The system combines **Tesseract OCR** and **EasyOCR**, enhanced through image preprocessing, text block alignment, and adaptive segmentation for regional scripts.

---

## ✨ Key Highlights

- 🔤 **Supports English and Gujarati scripts**
- 📈 **>90% average accuracy** on noisy or scanned printed text
- 🧠 **Hybrid OCR engine** using both Tesseract and EasyOCR
- 🪄 **Enhanced alignment + preprocessing pipeline** using OpenCV
- 🧩 Modular architecture: easily extensible to more Indian languages
- 🪶 Lightweight deployment, runs smoothly on older machines

---

## 🧠 Core Technical Innovations

| Component             | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| 🏗️ Preprocessing       | Adaptive thresholding, denoising, resizing, grayscale conversion             |
| 🧮 Alignment           | Text region alignment using contour detection and skew correction            |
| 🧠 OCR Engines         | Dual engine usage: Tesseract for accuracy, EasyOCR for robustness             |
| 📦 Postprocessing      | Unicode normalization, language-specific spell filtering, and whitespace fix |
| 🧪 Evaluation          | Benchmarked across 100+ real-world scanned samples (letters, forms, receipts) |

---

## 🛠️ Tech Stack

| Technology        | Usage                                        |
|------------------|----------------------------------------------|
| **Python**        | Main implementation language                 |
| **Tesseract OCR** | Rule-based accurate OCR for printed text     |
| **EasyOCR**       | Fast multilingual neural OCR                 |
| **OpenCV**        | Image processing: denoising, binarization    |
| **NumPy / PIL**   | Image matrix manipulation                    |

---

## 🚀 Getting Started

### 🔗 Clone the Repository

```bash
git clone https://github.com/divyang9991/bilingual_ocr.git
cd bilingual_ocr
```

| Name                 | Role                          | LinkedIn                                                  |
| -------------------- | ----------------------------- | --------------------------------------------------------- |
| **Divyang Tomar**    | OCR & Preprocessing Lead      | [LinkedIn](https://www.linkedin.com/in/divyangtomar)      |
| **Kishan Patel**     | EasyOCR Integration & Testing | [LinkedIn](https://www.linkedin.com/in/kdp-dev-pa)        |
| **ruthviraj pasee**  | UI/UX & Deployment            | [LinkedIn](https://www.linkedin.com/in/PruthvirajPasee0)))|

