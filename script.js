const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");

searchBtn.addEventListener("click", async () => {
  const query = searchInput.value;
  results.innerHTML = "검색 중...";

  try {
    const res = await fetch(`/api/elevator?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    results.innerHTML = "";
    if (data.items && data.items.length > 0) {
      data.items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.type}`;
        results.appendChild(li);
      });
    } else {
      results.innerHTML = "<li>검색 결과 없음</li>";
    }

  } catch (err) {
    console.error(err);
    results.innerHTML = "<li>API 호출 실패</li>";
  }
});
