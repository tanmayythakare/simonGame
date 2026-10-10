<div align="center">

# Simon Says — Interactive Memory & Pattern Engine

**Classic Sequence Memory Challenge Built with Vanilla JavaScript and Modern CSS3**

<p align="center">
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript ES6+"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/HTML5-Semantic-E34F26?style=flat-square&logo=html5" alt="HTML5"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS3-Transitions-1572B6?style=flat-square&logo=css3" alt="CSS3"></a>
  <a href="#"><img src="https://img.shields.io/badge/Dependencies-Zero-success?style=flat-square" alt="Zero Dependencies"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="MIT License"></a>
  <a href="#quickstart"><img src="https://img.shields.io/badge/Deployment-Local-informational?style=flat-square" alt="Local Deployment"></a>
</p>

<p align="center">
  Dynamic pattern sequence synthesis, real-time user input validation, and progressive difficulty escalation.<br>
  Zero build tools · Pure Vanilla JavaScript DOM manipulation · Sub-millisecond response latency.
</p>

<p align="center">
  <a href="#quick-flow">Quick Flow</a> •
  <a href="#state-machine-architecture">Architecture</a> •
  <a href="#core-gameplay-mechanics">Gameplay Mechanics</a> •
  <a href="#game-loop--state-transitions">Game Loop</a> •
  <a href="#quickstart">Quickstart</a> •
  <a href="#repository-structure">Repository Structure</a>
</p>

</div>

---

## Quick Flow

```
Keypress Start  →  Pattern Synthesis  →  Color Flash Sequence  →  User Input Validation  →  Level Escalation
```

---

## State Machine Architecture

```mermaid
flowchart TD
    subgraph IdleState ["Standby State"]
        StartKey["Awaiting Keypress Event<br/>document.addEventListener('keypress')"]
    end

    subgraph LevelEngine ["Progression & Synthesis Engine"]
        LevelInc["Increment Level Counter (level++)<br/>Update h2 Heading"]
        RandomSelect["Pseudo-Random Color Choice<br/>Math.floor(Math.random() * 4)"]
        AppendSeq["Push to Game Sequence Array<br/>gameseq.push(rcolor)"]
        TriggerFlash["Execute Game Flash Animation<br/>btn.classList.add('flash') [250ms]"]
        LevelInc --> RandomSelect
        RandomSelect --> AppendSeq
        AppendSeq --> TriggerFlash
    end

    subgraph UserEvaluation ["Input Validation Pipeline"]
        ClickEvent["User Button Click Handler (btnPress)<br/>Flash Visual Accent & Append to userseq"]
        CompareStep["Evaluate Current Step: userseq[idx] == gameseq[idx]"]
        ClickEvent --> CompareStep
    end

    subgraph DecisionMatrix ["Outcome Resolution"]
        Incomplete["Step Valid & Incomplete Sequence<br/>Await Next Button Input"]
        SuccessMatch["Step Valid & Full Sequence Complete<br/>setTimeout(levelUp, 1000)"]
        MismatchFailure["Sequence Mismatch Detected<br/>h2.innerHTML = Game Over<br/>Reset State: startOver()"]
    end

    StartKey -->|"Keypress Detected"| LevelInc
    TriggerFlash -->|"Sequence Presented"| ClickEvent
    CompareStep -->|"Matches Current Index"| Incomplete
    CompareStep -->|"All Steps Matched"| SuccessMatch
    CompareStep -->|"Wrong Color Pressed"| MismatchFailure
    SuccessMatch --> LevelInc
    MismatchFailure --> StartKey
```

---

## Core Gameplay Mechanics

### 01. Dynamic Sequence Generation & Escalation
* **Algorithmic Randomization**: Generates randomized pseudo-random index values mapped across 4 quadrant color tokens (`red`, `yellow`, `green`, `blue`).
* **Continuous State Array**: Preserves the complete game progression within a monotonically increasing array (`gameseq`), escalating memory requirements with each round.

### 02. Deterministic Input Verification
* **Step-by-Step Validation**: Assesses user clicks at index granularity (`userseq[idx] === gameseq[idx]`) immediately upon button down events.
* **Turn Containment**: Prevents out-of-turn interactions by managing disabled attributes until games are formally initiated.

### 03. Hardware-Accelerated Visual Feedback
* **CSS Class-Driven Animations**: Leverages discrete `.flash` and `.userflash` class toggles governed by 250ms JavaScript timeout loops for clear visual contrast between computer prompts and player clicks.
* **Color Quadrant Styling**: High-contrast quadrant layout styled with vibrant primary and secondary color palettes.

### 04. Zero-Dependency Vanilla Architecture
* **Native Browser Execution**: Requires zero package managers, compilation steps, bundlers, or runtime polyfills.
* **Universal Compatibility**: Fully executable across all modern desktop and mobile browsers via direct local file opening.

---

## Game Loop & State Transitions

| State | Trigger | Action Performed | Next State |
| :--- | :--- | :--- | :--- |
| **Idle** | Initial Page Load | Buttons disabled, waiting for keyboard input | Press any key to begin |
| **Generating** | Game Start / Level Up | Generates random color, updates level count, flashes target button | Awaiting User Input |
| **User Input** | Button Click (`click`) | Visual feedback flash, records selection in `userseq` | Evaluating Step |
| **Evaluating** | Array Index Match | Checks if `userseq[idx] === gameseq[idx]` | In Progress / Level Up / Game Over |
| **Game Over** | Input Mismatch | Displays final score (`level - 1`), resets state via `startOver()` | Idle |

---

## Quickstart

### Prerequisites
A modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).

---

### Option 1: Direct Execution (No Installation Required)
Clone the repository and open `index.html` directly in your browser:
```bash
git clone https://github.com/tanmayythakare/simonGame.git
cd simonGame
```
*Double-click `index.html` or open it with your browser.*

---

### Option 2: Local HTTP Server
Using Python:
```bash
python -m http.server 8000
```
Open **[http://localhost:8000](http://localhost:8000)** in your browser.

Using Node.js `serve`:
```bash
npx serve .
```

---

## How to Play

1. Press **any key** on your keyboard to start the game.
2. Watch the sequence: one of the 4 colored buttons will flash.
3. Click the button that flashed to replicate the computer's choice.
4. As you advance through each level, the sequence grows longer by 1 additional color.
5. Memorize and repeat the exact sequence from memory. If you click the incorrect button, the game ends and displays your final score.

---

## Repository Structure

```
simonGame/
├── index.html          # Semantic HTML5 markup & button container layout
├── style.css           # Quadrant layout, button styling, & flash animation classes
├── app.js              # Game state engine, sequence generator, & event handlers
├── .gitignore          # Repository hygiene rules
└── README.md           # Documentation & gameplay guide
```

---

## Contributing

1. Fork the repository.
2. Clone your fork:
   ```bash
   git clone https://github.com/tanmayythakare/simonGame.git
   ```
3. Create your feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   ```
4. Commit your changes:
   ```bash
   git commit -m "feat: add descriptive feature summary"
   ```
5. Push to your branch and submit a Pull Request.

---

## License

This project is open-source and distributed under the **[MIT License](LICENSE)**.

---

## Author

**Tanmay Thakare**
* GitHub: [@tanmayythakare](https://github.com/tanmayythakare)
* Email: [tanmayrthakare@gmail.com](mailto:tanmayrthakare@gmail.com)
* LinkedIn: [Tanmay Thakare](https://www.linkedin.com/in/tanmaythakare)

---

<div align="center">
  <a href="https://github.com/tanmayythakare">
    <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=16&pause=2000&color=38BDF8&center=true&vCenter=true&width=360&lines=Built+by+Tanmay+Thakare+%F0%9F%90%B1" alt="Built by Tanmay Thakare 🐱" />
  </a>
</div>