# 🎯 General Knowledge Quiz

A dynamic, animated general knowledge quiz web app built with HTML, CSS, and JavaScript — served by a lightweight Node.js + Express server.

---

## 📁 Project Structure

```
├── index.html        # Frontend — quiz UI
├── questions.json    # Quiz data — questions, answers & fun facts
├── server.js         # Node.js/Express server
├── .gitignore        # Ignores node_modules
└── README.md         # You're reading it
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher

### Installation

1. **Clone or download** the project into a folder
2. **Install dependencies**
   ```bash
   npm install express
   ```
3. **Start the server**
   ```bash
   node server.js
   ```
4. **Open your browser** and navigate to:
   ```
   http://localhost:3000
   ```

---

## ⚙️ Configuration

The server defaults to port **3000**. To use a different port, set the `PORT` environment variable:

```bash
PORT=8080 node server.js
```

---

## 🌐 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `GET` | `/` | Serves `index.html` |
| `GET` | `/questions.json` | Returns all quiz questions as JSON |

---

## ❓ Adding or Editing Questions

All questions live in `questions.json`. Each question follows this structure:

```json
{
  "id": 1,
  "cat": "Science",
  "diff": 1,
  "prompt": "Your question here?",
  "options": ["Option A", "Option B", "Option C", "Option D"],
  "answer": 1,
  "fact": "A fun fact shown after the question is answered."
}
```

| Field | Type | Description |
|-------|------|-------------|
| `id` | number | Unique question ID |
| `cat` | string | Category name |
| `diff` | 1 \| 2 \| 3 | Difficulty — 1 easy, 2 medium, 3 hard |
| `prompt` | string | The question text |
| `options` | array | Exactly 4 answer choices |
| `answer` | number | Zero-based index of the correct option |
| `fact` | string | Fun fact revealed after answering |

The server serves the file with `Cache-Control: no-cache`, so changes to `questions.json` are reflected immediately without restarting the server.

---

## ✨ Features

- 🏠 Animated homescreen with cloud-shaped **Go to Quiz** button
- 🎨 Dynamic floating background orbs and particles
- 📂 6 categories — Science, History, Geography, Pop Culture, Sports, Language
- 🔀 Questions shuffled on every attempt
- 🔥 Streak tracker and live score counter
- ⏱️ Timer that runs for the duration of the quiz
- 💡 Fun facts revealed after each answer
- 📊 Results screen with a score ring and category breakdown
- 📥 Download your results as a `.txt` file

---

## 🛠️ Built With

- HTML5 / CSS3 / Vanilla JavaScript
- [Express](https://expressjs.com/) — Node.js web framework
- [Google Fonts](https://fonts.google.com/) — Syne, DM Serif Display, IBM Plex Sans
