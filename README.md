# Dattebayo! — Data-Driven Personal Site

A minimal, themeable personal portfolio built with **React + Chakra UI**. All content — your name, bio, skills, social links, education, and more — lives in a single **`content.json`** file. No component editing required for basic customization.


## Live Site

- https://naruto.mappe.shop

## Getting Started

```bash
# Prewritten docker instruction
# Default bind port 8080:80
bash script.sh
```

## How to Customize

### 1. Update Your Content — `src/content.json`

#### `topbar`
Navigation links shown at the top of the page.

```json
"topbar": [
  { "name": "home", "path": "/me", "tooltip": "Back to home" }
]
```
| Field | Description |
|-------|-------------|
| `name` | Label shown in the nav |
| `path` | Route path it links to |
| `tooltip` | Text shown on hover |

> ⚠️ If you change a `path`, you must also update the matching route in **`src/App.tsx` line 41** to keep navigation working.
---

#### `hero`
Your main profile card and bio text.

```json
"hero": {
  "name": "Your Name",
  "title": "Your Job Title",
  "location": "Your City, Country",
  "phone": "+00 000 000 0000",
  "email": "you@example.com",
  "image": { "profile": "profile.jpeg" },
  "short": "One paragraph bio shown on the home page.",
  "long": "about.txt",
  "resume": { "file": "resume.pdf", "name": "Resume - Your Name" }
}
```

- **`short`** — short intro about yourself used in main page.
- **`long`** — briff intro also customize `about.txt` file in `public/about.txt`.
- **`image.profile`** — place your photo in `public/` and put the filename here
- **`resume.file`** — place your PDF in `public/` and put the filename here

---

#### `hero.skills`
Skill categories displayed on your About/Resume page.

```json
"skills": [
  {
    "category": "Languages",
    "brief": "Short description of this group.",
    "items": ["Golang", "Rust", "Bash"]
  }
]
```

Add as many categories as you need. Each `items` entry becomes a badge/tag.

---

#### `marquee`
The scrolling strip of tech icons. Keys are display names, values are icon URLs.

```json
"marquee": {
  "golang": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
  "docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
}
```

Use any SVG icon URL — [devicons](https://devicon.dev/) and [skillicons.dev](https://skillicons.dev/) both work well.

---

#### `social`
Social links shown as icon buttons on your profile card. Keys are URLs, values are icon image URLs.

```json
"social": {
  "https://github.com/yourusername": "https://skillicons.dev/icons?i=github",
  "mailto:you@example.com": "https://skillicons.dev/icons?i=gmail"
}
```

Add or remove entries freely. Any URL works as a key (including `mailto:` and `tel:`).

---

#### `education`
Your academic history.

```json
"education": [
  {
    "institution": "University Name",
    "degree": "Your Degree",
    "location": "City, Country",
    "passing-year": "2023",
    "website": "https://university.edu",
    "verify": {
      "roll": "ROLL-NUMBER",
      "registration": "REG-NUMBER",
      "certificate": "cert/diploma.png"
    }
  }
]
```

Place certificate images in `public/cert/` and reference them in `certificate`.

---

#### `footer`
Shown at the bottom of every page.

```json
"footer": {
  "version": "v1.0.0",
  "last-updated": "2025-01-01",
  "copyright": "Your Name — Your tagline"
}
```

---

### 2. Swap Your Photo and Resume

| File | Location | Notes |
|------|----------|-------|
| Profile photo | `public/profile.jpeg` | Any format works; update `hero.image.profile` to match |
| Resume | `public/resume.pdf` | Update `hero.resume.file` to match the filename |
| Certificates | `public/cert/` | Referenced in `education[].verify.certificate` |
