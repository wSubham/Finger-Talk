# FingerTalk — Project Notes

## What was in the supplied archive

The original archive contained a static HTML/CSS/JavaScript website, a Streamlit Python prototype, one demo video, and six team photographs.

## Current Python implementation

`2nd.py` uses:

- Streamlit for the UI.
- OpenCV for video capture, frame conversion, resizing, drawing, and video output.
- MediaPipe Hands for hand landmark detection.
- NumPy/Pillow-related dependencies from the original imports.
- Rule-based conditions over hand landmarks for selected signs.

The source also imports `speech_recognition`, although the supplied implementation does not contain a complete speech-to-sign pipeline.

## Preservation policy

The repository intentionally keeps the original source filename `2nd.py` and original project assets so that the GitHub repository represents the historical project accurately. Documentation has been added around the original code rather than silently rewriting the implementation.
