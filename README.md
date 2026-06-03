# 🇮🇹 Italy City Search

A simple JavaScript-powered search application that allows users to search for Italian cities and regions in real time.

As the user types, matching cities and administrative regions are displayed instantly, with matching terms highlighted and population figures formatted for readability.

## ✨ Features

- Real-time search while typing
- Search by:
  - City name
  - Administrative region (state/province)
- Highlights matching results
- Displays population data with thousands separators
- Clean and responsive UI
- Built with vanilla JavaScript (no frameworks)

## 📸 Preview

Users can:

1. Enter a city or region name.
2. See matching results immediately.
3. View:
   - City name
   - Administrative region
   - Population

Example search:

```text
mil
```

Results:

```text
Milan, Lombardy      1,352,000
```

## 🛠️ Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- Fetch API

## 📁 Project Structure

```text
project/
│
├── index.html
├── css/
│   └── style.css
├── javascript/
│   └── index.js
└── assets/
    └── it.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/italy-city-search.git
```

### 2. Navigate into the project

```bash
cd italy-city-search
```

### 3. Run a local server

Because the application loads data using the Fetch API, opening the HTML file directly may cause CORS issues.

Use a local server instead:

#### VS Code Live Server

Install the Live Server extension and click:

```text
Go Live
```

#### Python

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## 🔍 How It Works

### Data Source

The application fetches city data from:

```javascript
const endpoint = '../assets/it.json';
```

### Search Logic

Every key press triggers:

1. Clearing previous results
2. Creating a regular expression from the search term
3. Fetching city data
4. Filtering matches
5. Rendering matching cities to the page

```javascript
if(element.city.match(re) || element.admin_name.match(re))
```

### Population Formatting

Population values are formatted with commas:

```javascript
numberWithCommas(1234567);
```

Output:

```text
1,234,567
```

## 🎨 Styling Highlights

The interface includes:

- Full viewport layout
- Centered search experience
- Gradient result cards
- Flexible result alignment
- Highlighted matches using HTML `<mark>` tags

## 🔮 Possible Improvements

- Debounce search input for better performance
- Fetch data only once and cache it locally
- Add keyboard navigation
- Sort results by population
- Add fuzzy matching
- Add region filters
- Improve mobile responsiveness
- Display a "No results found" message

## 📚 Learning Concepts Demonstrated

This project is a great example of:

- DOM manipulation
- Event listeners
- Fetch API
- Regular expressions
- Dynamic HTML rendering
- Array iteration
- CSS Flexbox
- ES6 JavaScript

Built with ❤️ and Vanilla JavaScrip
