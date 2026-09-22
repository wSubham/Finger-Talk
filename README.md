# FingerTalk 🤟

**FingerTalk** is a student group project built to explore how technology can support **Indian Sign Language (ISL) learning and communication**. The project combines a browser-based learning interface with a Python/Streamlit computer-vision prototype that detects selected hand signs from a webcam or uploaded video.

> **Project status:** Historical/academic prototype. The repository preserves the original project while documenting what was implemented, how it works, and its current limitations.

---

## ✨ Project Overview

Communication barriers can make everyday interaction difficult between people who use sign language and people who do not understand it. FingerTalk was designed as an educational prototype with two complementary parts:

1. **Interactive web interface** – introduces the platform, provides a learning flow, collects a short learner survey, and presents learning/practice pages.
2. **Computer-vision prototype** – uses **MediaPipe Hands** and **OpenCV** to detect hand landmarks and classify a selected set of static hand configurations using rule-based geometric conditions.

The project was developed as a group project, with different members contributing to frontend, backend, and machine-learning/computer-vision work.

---

## 🎯 Objectives

- Create an accessible interface for learning Indian Sign Language.
- Provide a simple learner onboarding flow.
- Demonstrate hand tracking through a webcam or uploaded video.
- Extract hand landmarks using MediaPipe.
- Recognize a selected set of static signs using landmark relationships.
- Display the detected sign directly on the video stream.
- Allow processed video to be recorded and displayed.
- Provide documentation and information about the project team.

---

## 🧩 Main Features

### Web interface

- Home/landing page for FingerTalk.
- Learn page with a basic lesson/practice interface.
- Learner survey for experience, goals, and learning preferences.
- About page containing the project motivation and team members.
- User documentation page.
- Responsive HTML/CSS-based interface.

### Computer-vision prototype

- Webcam input support.
- Uploaded video support (`mp4`, `mov`, `avi`, `asf`, `m4v`).
- Demo-video mode using `S.mp4`.
- Hand landmark detection with MediaPipe Hands.
- OpenCV frame processing and visualization.
- Rule-based recognition of selected numeric/alphabetic hand configurations.
- Landmark skeleton drawing on detected hands.
- Optional processed-video recording.
- Streamlit interface for running the prototype.

---

## 🏗️ Architecture

```text
                    ┌─────────────────────┐
                    │     FingerTalk UI    │
                    │  HTML / CSS / JS     │
                    └──────────┬──────────┘
                               │
             ┌─────────────────┴─────────────────┐
             │                                   │
     ┌───────▼────────┐                 ┌────────▼────────┐
     │ Learning Flow  │                 │ Survey / About   │
     │ learn.html     │                 │ survey.html      │
     └────────────────┘                 └─────────────────┘

                    Computer Vision Prototype

     Webcam / Video / Demo Video
                 │
                 ▼
        ┌────────────────────┐
        │ OpenCV             │
        │ Frame acquisition  │
        └─────────┬──────────┘
                  ▼
        ┌────────────────────┐
        │ MediaPipe Hands    │
        │ 21 hand landmarks  │
        └─────────┬──────────┘
                  ▼
        ┌────────────────────┐
        │ Landmark Geometry  │
        │ / finger states    │
        └─────────┬──────────┘
                  ▼
        ┌────────────────────┐
        │ Rule-based sign    │
        │ classification      │
        └─────────┬──────────┘
                  ▼
        ┌────────────────────┐
        │ Streamlit output   │
        │ + optional video   │
        └────────────────────┘
```

---

## 🧠 How the Sign Recognition Prototype Works

The Python prototype does **not** use a trained neural-network classifier in the current source. Instead, it uses MediaPipe Hands to obtain hand landmarks and then applies manually defined geometric rules.

MediaPipe provides a set of hand landmarks containing normalized `x`, `y`, and `z` coordinates. The program stores these landmarks and compares the positions of fingertip and joint landmarks.

For example, the implementation checks relationships such as:

- whether a fingertip is above/below another joint,
- whether the thumb is positioned relative to another landmark,
- whether particular fingers are extended or folded,
- and combinations of these conditions.

The detected class is then written onto the video frame and, for several signs, appended to an output list.

### Signs represented in the current prototype

The source contains rule sets for a subset of:

- Numbers: `0`–`9`
- Letters/signs: `A`, `B`, `C`, `H`, `J`, `L`, `U`

Because these rules are based on 2D landmark relationships, recognition can be affected by hand orientation, camera angle, lighting, occlusion, and individual differences in signing.

---

## 🛠️ Technology Stack

| Area | Technology |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Computer Vision | OpenCV |
| Hand Tracking | MediaPipe Hands |
| Numerical Processing | NumPy |
| UI for Python Prototype | Streamlit |
| Image Processing | Pillow |
| Speech library | SpeechRecognition (imported by the original prototype) |
| Language | Python |

---

## 📁 Repository Structure

```text
FingerTalk/
├── demo/
│   └── fingertalk-demo.mp4
│
├── README.md
├── LICENSE
├── requirements.txt
├── .gitignore
│
├── index.html              # Landing page
├── learn.html              # Learning/practice page
├── learn.css               # Learn page styling
├── learn.js                # Learning-page interactions
├── survey.html             # Learner questionnaire
├── survey.css              # Survey styling
├── survey.js               # Survey interactions
├── about.html              # Project/team information
├── documentation.html      # Project documentation page
├── styles.css              # Main website styling
│
├── 2nd.py                  # Streamlit + MediaPipe computer-vision prototype
├── S.mp4                   # Demo video used by the Python prototype
│
└── PICS/
    ├── sayand.jpg.jpg
    ├── rikhiya.jpg.jpg
    ├── rik.jpg.jpg
    ├── subham.jpg.jpg
    ├── sayanp.jpg.jpg
    └── suprakash.jpg.jpg
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/wSubham/FingerTalk.git
cd FingerTalk
```

Replace `wSubham` with the GitHub account that owns the repository.

### 2. Create a Python virtual environment

Windows:

```bash
python -m venv .venv
.venv\Scripts\activate
```

Linux/macOS:

```bash
python3 -m venv .venv
source .venv/bin/activate
```

### 3. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the computer-vision prototype

```bash
streamlit run 2nd.py
```

Streamlit will open the application in a browser. From the sidebar, select **Sign Language to Text** and choose either the webcam or a supported video file.

> **Note:** Webcam access depends on browser/OS permissions and the local Python environment. The original prototype was developed as a desktop-oriented demonstration.

---

## 🌐 Run the Static Website

The HTML portion does not require a Python server for basic viewing.

You can open:

```text
index.html
```

or serve the directory locally with a simple static server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

Using a local server is preferable because browser behavior for local files can differ from normal web hosting.

---

## 🖥️ Application Flow

### Web flow

```text
Home
  │
  ├── Learn
  │     ├── Lesson section
  │     └── Practice section
  │
  ├── About Us
  │
  ├── Get Started
  │     └── Learner Survey
  │
  └── Documentation
```

### Recognition flow

```text
Input frame
   ↓
Flip frame for webcam-style display
   ↓
Convert BGR → RGB
   ↓
MediaPipe Hands
   ↓
Extract landmarks
   ↓
Evaluate finger/landmark conditions
   ↓
Identify matching sign
   ↓
Draw landmarks + label
   ↓
Display through Streamlit
   ↓
Optionally save processed video
```

---

## 👥 Team Contributions

The original About page identifies the following project roles:

| Member | Recorded role |
|---|---|
| Sayan Das | Frontend Developer |
| Rikhiya Mardanya | Frontend Developer |
| Rik Mondal | Machine Learning Developer |
| Suprakash Maji | Machine Learning Developer |
| Shubham Das | Backend Developer |
| Sayan Paul | Backend Developer |

These roles are reproduced from the original project files and may represent the division of work at the time of development.

---

### Implemented in the current source

- MediaPipe hand landmark detection.
- OpenCV video processing.
- Streamlit application interface.
- Rule-based recognition for a selected sign set.
- Static learning website.
- Survey and progress UI prototypes.

### Mentioned but not demonstrated by the current source

The original project text refers to technologies such as TensorFlow and ResNet50, but the supplied Python implementation currently imports and uses MediaPipe, OpenCV, NumPy, Pillow, Streamlit, and SpeechRecognition. No TensorFlow/ResNet50 inference pipeline is present in `2nd.py`.

---

## 📚 Academic / Portfolio Context

FingerTalk demonstrates an early-stage combination of:

- frontend development,
- computer vision,
- human-computer interaction,
- hand landmark analysis,
- educational UI design,
- and accessibility-oriented problem solving.

For portfolio purposes, the project is best described as a **computer-vision-based Indian Sign Language learning and recognition prototype** rather than as a complete automatic ISL translation system.

---

## 📄 License

This project is released under the **MIT License**. See [`LICENSE`](LICENSE) for details.

---

## 🙌 Acknowledgement

The project uses open-source technologies including MediaPipe, OpenCV, Streamlit, NumPy, Pillow, and other Python/web tooling.
