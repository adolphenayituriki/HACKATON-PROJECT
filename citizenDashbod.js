const data = [
      { keyword: "transport", description: "Report transport issue", link: "#transport" },
      { keyword: "security", description: "Security issue", link: "#security" },
      { keyword: "Agriculture", description: "Report agriculture issue and other related to farming", link: "#agriculture" },
      { keyword: "Trading", description: "Entrepreneurial or other trading issue", link: "#trading" },
      { keyword: "health", description: "Public clinic issues and other health problem", link: "#health" },
      { keyword: "education", description: "School concerns and Higher education issue", link: "#education" },
      { keyword: "leadership", description: "Leadership concerns and political issues", link: "#leadership" }
];

function handleSearch(event) {
      event.preventDefault();
      const query = document.getElementById("searchInput").value.trim().toLowerCase();
      const resultsDiv = document.getElementById("searchResults");
      const descBox = document.getElementById("descriptionBox");
      descBox.style.display = "none";

      const matches = data.filter(item => item.keyword.includes(query));

      if (matches.length === 0) {
      resultsDiv.innerHTML = "<p>No results found.</p>";
      } else {
      resultsDiv.innerHTML = matches.map(item =>
      `<div class="result" onclick="handleClick('${item.keyword}')">
            <strong>${item.keyword}</strong>: ${item.description}
      </div>`
      ).join("");
      }
}

function handleClick(keyword) {
      const item = data.find(d => d.keyword === keyword);
      const descBox = document.getElementById("descriptionBox");
      descBox.innerHTML = `<strong>${item.keyword.toUpperCase()}</strong><br>${item.keyword.toLowerCase()} is one of necessary public service that help citizens to be developed in all corners. <br>Dear citizen if you were or you have an issue you can, report or view you complaint. `
      descBox.style.display = "block";
}
