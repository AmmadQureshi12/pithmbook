const chapters = [
  {
    title: "Accounting Basics",
    description: "Start with accounting principles, the double-entry system, journals, depreciation and bank reconciliation.",
    startPage: 7,
    endPage: 134,
    firstPrintedPage: 1,
    file: "study-note-1.pdf",
    sections: [
      { title: "Accounting Principles, Concepts and Conventions", number: "1.1", page: 1 },
      { title: "Capital and Revenue Transactions", number: "1.2", page: 15 },
      { title: "Double Entry and Books of Account", number: "1.3", page: 24 },
      { title: "Depreciation", number: "1.4", page: 74 },
      { title: "Rectification of Errors", number: "1.5", page: 87 },
      { title: "Opening and Closing Entries", number: "1.6", page: 104 },
      { title: "Bank Reconciliation Statements", number: "1.7", page: 117 }
    ]
  },
  {
    title: "Accounting for Special Transactions",
    description: "Explore bills of exchange, consignment accounting and joint venture transactions.",
    startPage: 135,
    endPage: 181,
    firstPrintedPage: 129,
    file: "study-note-2.pdf",
    sections: [
      { title: "Bills of Exchange", number: "2.1", page: 129 },
      { title: "Consignment", number: "2.2", page: 142 },
      { title: "Joint Venture", number: "2.3", page: 158 }
    ]
  },
  {
    title: "Preparation of Final Accounts",
    description: "Learn how to prepare trading, profit and loss, balance sheet and not-for-profit accounts.",
    startPage: 182,
    endPage: 220,
    firstPrintedPage: 176,
    file: "study-note-3.pdf",
    sections: [
      { title: "Accounts of a Profit-Making Concern", number: "3.1", page: 176 },
      { title: "Accounts of a Not-for-Profit Concern", number: "3.2", page: 198 }
    ]
  },
  {
    title: "Fundamentals of Cost Accounting",
    description: "Understand cost accounting, cost classification and the preparation of a cost sheet.",
    startPage: 221,
    endPage: 257,
    firstPrintedPage: 215,
    file: "study-note-4.pdf",
    sections: [
      { title: "Meaning and Significance of Cost Accounting", number: "4.1", page: 215 },
      { title: "Classification of Costs", number: "4.2", page: 227 },
      { title: "Format of Cost Sheet", number: "4.3", page: 240 }
    ]
  }
];

const pdfPath = "./fundamentals-of-accounting.pdf";
const root = document.documentElement;
const chapterNav = document.getElementById("chapter-nav");
const chapterCards = document.getElementById("chapter-cards");
const sectionNav = document.getElementById("section-nav");
const welcome = document.getElementById("welcome");
const reader = document.getElementById("reader");
const frame = document.getElementById("pdf-frame");
const readerStudyNote = document.getElementById("reader-study-note");
const readerHeading = document.getElementById("reader-heading");
const readerBreadcrumb = document.getElementById("reader-breadcrumb");
const readerPageChip = document.getElementById("reader-page-chip");
const openPdfLink = document.getElementById("open-pdf-link");
const openPdfTextLink = document.getElementById("open-pdf-text-link");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const previousCard = document.getElementById("previous-card");
const nextCard = document.getElementById("next-card");
const menuButton = document.getElementById("menu-button");
const sidebarScrim = document.getElementById("sidebar-scrim");
const searchDialog = document.getElementById("search-dialog");
const searchInput = document.getElementById("search-input");
const searchStatus = document.getElementById("search-status");
const searchResults = document.getElementById("search-results");
const progressTrack = document.getElementById("reading-progress");
const progressCount = document.getElementById("progress-count");

const cardArt = [
  `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="14" y="13" width="48" height="66" rx="6" fill="white" stroke="currentColor"/><path d="M24 25h27M24 33h19M24 42h24M24 50h12m9 0h8M24 59h23M24 67h15" stroke="currentColor" opacity=".45"/><rect x="48" y="34" width="39" height="51" rx="7" fill="#dce6ff" stroke="currentColor"/><rect x="54" y="41" width="27" height="11" rx="3" fill="white" stroke="currentColor" opacity=".8"/><path d="M57 47h8m5 0h2" stroke="currentColor"/><g fill="white" stroke="currentColor"><rect x="55" y="58" width="6" height="6" rx="1.5"/><rect x="65" y="58" width="6" height="6" rx="1.5"/><rect x="75" y="58" width="6" height="6" rx="1.5"/><rect x="55" y="68" width="6" height="6" rx="1.5"/><rect x="65" y="68" width="6" height="6" rx="1.5"/></g><rect x="75" y="68" width="6" height="6" rx="1.5" fill="#b9efd9" stroke="currentColor"/></svg>`,
  `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="20" y="12" width="53" height="68" rx="7" fill="white" stroke="currentColor"/><path d="M31 26h26m-26 8h32m-32 8h24m-24 8h31" stroke="currentColor" opacity=".4"/><circle cx="39" cy="67" r="11" fill="#ece6ff" stroke="currentColor"/><path d="m35 67 3 3 6-7" stroke="currentColor"/><path d="M70 31c11 4 17 12 17 23m-6-5 6 6 5-7M30 74c-9-5-14-13-14-23m6 5-6-6-5 7" stroke="currentColor" stroke-width="2.2"/><rect x="50" y="57" width="36" height="27" rx="6" fill="#f3efff" stroke="currentColor"/><path d="M58 67h20m-20 7h13" stroke="currentColor" opacity=".55"/></svg>`,
  `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="15" y="15" width="66" height="69" rx="7" fill="white" stroke="currentColor"/><path d="M26 27h27m-27 7h19" stroke="currentColor" opacity=".42"/><path d="M27 67V54m13 13V45m13 22V50m13 17V37" stroke="currentColor" stroke-width="7" stroke-linecap="round"/><path d="m27 48 13-9 13 5 13-12 9 2" stroke="#52b89b" stroke-width="2.5"/><circle cx="27" cy="48" r="2.5" fill="white" stroke="#52b89b" stroke-width="2"/><circle cx="53" cy="44" r="2.5" fill="white" stroke="#52b89b" stroke-width="2"/><path d="M24 75h49" stroke="currentColor" opacity=".28"/></svg>`,
  `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="15" y="21" width="44" height="58" rx="7" fill="white" stroke="currentColor"/><rect x="22" y="29" width="30" height="11" rx="3" fill="#fff1d8" stroke="currentColor"/><path d="M26 34h10m5 0h4" stroke="currentColor"/><g fill="#ffe5bf" stroke="currentColor"><rect x="22" y="47" width="7" height="7" rx="2"/><rect x="34" y="47" width="7" height="7" rx="2"/><rect x="46" y="47" width="7" height="7" rx="2"/><rect x="22" y="59" width="7" height="7" rx="2"/><rect x="34" y="59" width="7" height="7" rx="2"/></g><rect x="46" y="59" width="7" height="7" rx="2" fill="#f4bd71" stroke="currentColor"/><circle cx="70" cy="61" r="18" fill="white" stroke="currentColor"/><path d="M70 43v18h18" stroke="currentColor"/><path d="M70 61 57 74" stroke="#e1a550" stroke-width="5"/><path d="M70 61h18" stroke="#f4bd71" stroke-width="5"/></svg>`
];

let activeChapter = -1;
let searchIndex;
let searchIndexPromise;
let selectedSearchResult = -1;

function createIconButton(icon, label) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "chapter-link";
  button.setAttribute("aria-label", `Open ${label}`);
  button.addEventListener("click", () => openChapter(icon));
  return button;
}

function createChapterLink(chapter, index, card = false) {
  const button = createIconButton(index, chapter.title);

  if (card) {
    button.className = "chapter-card";

    const copy = document.createElement("span");
    copy.className = "chapter-card-copy";

    const topline = document.createElement("span");
    topline.className = "card-topline";
    const number = document.createElement("span");
    number.className = "card-number";
    number.textContent = `NOTE ${String(index + 1).padStart(2, "0")}`;
    topline.append(number, document.createTextNode("· ACCOUNTING"));

    const title = document.createElement("strong");
    title.textContent = chapter.title;

    const description = document.createElement("span");
    description.className = "chapter-description";
    description.textContent = chapter.description;

    const pageCount = document.createElement("span");
    pageCount.className = "card-pages";
    pageCount.textContent = `${chapter.endPage - chapter.startPage + 1} pages · PDF pp. ${chapter.startPage}–${chapter.endPage}`;

    const read = document.createElement("span");
    read.className = "card-read";
    read.innerHTML = `Read study note <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>`;
    copy.append(topline, title, description, read, pageCount);

    const art = document.createElement("span");
    art.className = `chapter-art art-${["basics", "transactions", "final-accounts", "cost"][index]}`;
    art.innerHTML = cardArt[index];
    button.append(copy, art);
  } else {
    const number = document.createElement("span");
    number.className = "chapter-number";
    number.textContent = String(index + 1).padStart(2, "0");

    const title = document.createElement("span");
    title.textContent = chapter.title;
    button.append(number, title);
  }

  return button;
}

chapters.forEach((chapter, index) => {
  const item = document.createElement("li");
  item.append(createChapterLink(chapter, index));
  chapterNav.append(item);
  chapterCards.append(createChapterLink(chapter, index, true));
});

function updateNavigation() {
  const links = chapterNav.querySelectorAll(".chapter-link");
  links.forEach((link, index) => {
    if (index === activeChapter) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });

  previousButton.disabled = activeChapter <= 0;
  nextButton.disabled = activeChapter < 0 || activeChapter >= chapters.length - 1;
  previousCard.disabled = activeChapter <= 0;
  nextCard.disabled = activeChapter < 0 || activeChapter >= chapters.length - 1;

  const progressValue = Math.max(0, activeChapter + 1);
  progressCount.textContent = `${progressValue} / ${chapters.length}`;
  progressTrack.setAttribute("aria-valuenow", String(progressValue));
  progressTrack.querySelectorAll("span").forEach((segment, index) => {
    segment.classList.toggle("is-complete", index < progressValue);
  });

  document.querySelectorAll(".reader-progress span").forEach((segment, index) => {
    segment.classList.toggle("is-complete", index <= activeChapter);
  });

  previousCard.querySelector("strong").textContent = chapters[Math.max(0, activeChapter - 1)]?.title ?? "Previous";
  nextCard.querySelector("strong").textContent = chapters[Math.min(chapters.length - 1, activeChapter + 1)]?.title ?? "Next";
}

function updatePageLink(selectedButton) {
  sectionNav.querySelectorAll("button").forEach((button) => {
    if (button === selectedButton) {
      button.setAttribute("aria-current", "location");
    } else {
      button.removeAttribute("aria-current");
    }
  });
}

function renderSections(chapter, activePdfPage = 1) {
  sectionNav.replaceChildren();

  chapter.sections.forEach((section) => {
    const localPdfPage = Math.max(1, section.page - chapter.firstPrintedPage + 1);
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.pdfPage = String(localPdfPage);

    const number = document.createElement("span");
    number.textContent = section.number;

    const label = document.createElement("span");
    label.textContent = section.title;
    button.append(number, label);
    button.addEventListener("click", () => setChapterPage(localPdfPage));
    sectionNav.append(button);

    if (localPdfPage === activePdfPage) {
      updatePageLink(button);
    }
  });
}

function setChapterPage(localPdfPage, updateAddress = true) {
  const chapter = chapters[activeChapter];
  if (!chapter || !Number.isInteger(localPdfPage) || localPdfPage < 1) {
    return;
  }

  frame.src = `./chapters/${chapter.file}#page=${localPdfPage}&zoom=page-width`;
  const section = sectionNav.querySelector(`[data-pdf-page="${localPdfPage}"]`);
  updatePageLink(section);

  if (updateAddress) {
    history.pushState(null, "", `#chapter-${activeChapter + 1}-page-${localPdfPage}`);
  }
}

function showReader() {
  welcome.hidden = true;
  reader.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeSidebar() {
  document.body.classList.remove("sidebar-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function openChapter(index, options = {}) {
  const chapter = chapters[index];
  if (!chapter) {
    return;
  }

  const pdfPage = Number.isInteger(options.pdfPage) && options.pdfPage > 0 ? options.pdfPage : 1;
  activeChapter = index;
  readerStudyNote.textContent = `STUDY NOTE ${String(index + 1).padStart(2, "0")} OF 04 · BOOK PAGES ${chapter.startPage}–${chapter.endPage}`;
  readerHeading.textContent = chapter.title;
  readerBreadcrumb.textContent = chapter.title;
  readerPageChip.textContent = `${chapter.endPage - chapter.startPage + 1} pages · book pp. ${chapter.startPage}–${chapter.endPage}`;
  frame.title = `${chapter.title} — study note ${index + 1}`;
  frame.src = `./chapters/${chapter.file}#page=${pdfPage}&zoom=page-width`;
  openPdfLink.href = `./chapters/${chapter.file}`;
  openPdfLink.download = chapter.file;
  openPdfLink.setAttribute("aria-label", `Download ${chapter.title}`);
  openPdfTextLink.href = `./chapters/${chapter.file}`;
  renderSections(chapter, pdfPage);
  previousButton.querySelector("span").textContent = "Previous";
  nextButton.querySelector("span").textContent = "Next note";
  showReader();
  updateNavigation();

  if (options.updateAddress !== false) {
    const suffix = pdfPage > 1 ? `-page-${pdfPage}` : "";
    history.pushState(null, "", `#chapter-${index + 1}${suffix}`);
  }

  closeSidebar();
}

function openFullBook(pdfPage = 1, options = {}) {
  activeChapter = -1;
  readerStudyNote.textContent = "THE COMPLETE LEARNING RESOURCE · 257 PAGES";
  readerHeading.textContent = "Fundamentals of Accounting";
  readerBreadcrumb.textContent = "Complete book";
  readerPageChip.textContent = "257 pages · 4 study notes";
  frame.title = "Fundamentals of Accounting — complete book";
  frame.src = `${pdfPath}#page=${pdfPage}&zoom=page-width`;
  openPdfLink.href = pdfPath;
  openPdfLink.download = "fundamentals-of-accounting.pdf";
  openPdfLink.setAttribute("aria-label", "Download the complete book");
  openPdfTextLink.href = pdfPath;
  sectionNav.replaceChildren();
  previousButton.querySelector("span").textContent = "Previous";
  nextButton.querySelector("span").textContent = "Next";
  showReader();
  updateNavigation();
  if (options.updateAddress !== false) {
    history.pushState(null, "", pdfPage > 1 ? `#book-page-${pdfPage}` : "#book");
  }
  closeSidebar();
}

function showHome(updateAddress = true) {
  welcome.hidden = false;
  reader.hidden = true;
  activeChapter = -1;
  updateNavigation();
  closeSidebar();

  if (updateAddress) {
    history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
  }
}

function syncRoute() {
  const chapterMatch = window.location.hash.match(/^#chapter-(\d+)(?:-page-(\d+))?$/);
  if (chapterMatch) {
    const pdfPage = chapterMatch[2] ? Number(chapterMatch[2]) : 1;
    openChapter(Number(chapterMatch[1]) - 1, { pdfPage, updateAddress: false });
  } else if (window.location.hash === "#book") {
    openFullBook(1, { updateAddress: false });
  } else if (/^#book-page-\d+$/.test(window.location.hash)) {
    openFullBook(Number(window.location.hash.slice("#book-page-".length)), { updateAddress: false });
  } else {
    showHome(false);
  }
}

function renderPageSearchResults(query) {
  searchResults.replaceChildren();
  const normalizedQuery = query.trim().toLocaleLowerCase();
  if (normalizedQuery.length < 2) {
    searchStatus.textContent = "Search chapter titles and the full text of the book.";
    return;
  }

  if (!searchIndex) {
    searchStatus.textContent = "Loading the book index…";
    return;
  }

  const words = normalizedQuery.split(/\s+/).filter(Boolean);
  const titleMatches = chapters
    .map((chapter, index) => ({ chapter, index }))
    .filter(({ chapter }) => chapter.title.toLocaleLowerCase().includes(normalizedQuery));

  const pageMatches = searchIndex
    .map((page) => {
      const text = page.text.toLocaleLowerCase();
      if (!words.every((word) => text.includes(word))) {
        return null;
      }

      const exactPhrase = text.includes(normalizedQuery);
      const chapterTitle = chapters[page.chapter]?.title.toLocaleLowerCase() ?? "";
      const titleWeight = chapterTitle.includes(normalizedQuery) ? 2 : 0;
      const firstMatch = Math.min(...words.map((word) => text.indexOf(word)).filter((position) => position >= 0));
      const snippetStart = Math.max(0, firstMatch - 76);
      const snippetEnd = Math.min(page.text.length, firstMatch + normalizedQuery.length + 126);

      return {
        ...page,
        score: (exactPhrase ? 100 : 60) + titleWeight,
        snippet: `${snippetStart > 0 ? "…" : ""}${page.text.slice(snippetStart, snippetEnd).trim()}${snippetEnd < page.text.length ? "…" : ""}`
      };
    })
    .filter(Boolean)
    .sort((left, right) => right.score - left.score || left.page - right.page);

  const selectedPages = [];
  const countsByChapter = new Map();
  for (const result of pageMatches) {
    const count = countsByChapter.get(result.chapter) ?? 0;
    if (count < 4) {
      selectedPages.push(result);
      countsByChapter.set(result.chapter, count + 1);
    }
    if (selectedPages.length >= 8) {
      break;
    }
  }

  titleMatches.forEach(({ chapter, index }) => {
    const result = document.createElement("button");
    result.type = "button";
    result.className = "search-result";
    result.setAttribute("role", "option");
    result.addEventListener("click", () => {
      searchDialog.close();
      openChapter(index);
    });

    const topline = document.createElement("span");
    topline.className = "result-topline";
    const title = document.createElement("span");
    title.textContent = `Study note ${String(index + 1).padStart(2, "0")} · ${chapter.title}`;
    const page = document.createElement("span");
    page.className = "result-page";
    page.textContent = "Open chapter";
    topline.append(title, page);
    result.append(topline);
    searchResults.append(result);
  });

  selectedPages.forEach((page) => {
    const chapter = chapters[page.chapter];
    const result = document.createElement("button");
    result.type = "button";
    result.className = "search-result";
    result.setAttribute("role", "option");
    result.addEventListener("click", () => {
      searchDialog.close();
      if (chapter) {
        openChapter(page.chapter, { pdfPage: Math.max(1, page.page - chapter.startPage + 1) });
      } else {
        openFullBook(page.page);
      }
    });

    const topline = document.createElement("span");
    topline.className = "result-topline";
    const title = document.createElement("span");
    title.textContent = chapter
      ? `Study note ${String(page.chapter + 1).padStart(2, "0")} · ${chapter.title}`
      : "Contents & preliminary pages";
    const pageNumber = document.createElement("span");
    pageNumber.className = "result-page";
    pageNumber.textContent = `PDF page ${page.page}`;
    topline.append(title, pageNumber);

    const snippet = document.createElement("span");
    snippet.className = "result-snippet";
    appendHighlightedText(snippet, page.snippet, words);
    result.append(topline, snippet);
    searchResults.append(result);
  });

  const total = titleMatches.length + selectedPages.length;
  searchStatus.textContent = total
    ? `${selectedPages.length} page result${selectedPages.length === 1 ? "" : "s"}${titleMatches.length ? ` · ${titleMatches.length} chapter match${titleMatches.length === 1 ? "" : "es"}` : ""} for “${query.trim()}”`
    : `No matches found for “${query.trim()}”. Try a broader accounting term.`;

  if (!total) {
    const empty = document.createElement("p");
    empty.className = "search-empty";
    empty.textContent = "Try another term, such as journal, depreciation or cost sheet.";
    searchResults.append(empty);
  }

  selectedSearchResult = -1;
}

function appendHighlightedText(container, text, words) {
  const escapedWords = words
    .slice()
    .sort((left, right) => right.length - left.length)
    .map((word) => word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const pattern = new RegExp(`(${escapedWords.join("|")})`, "gi");
  let cursor = 0;

  for (const match of text.matchAll(pattern)) {
    const position = match.index;
    if (position > cursor) {
      container.append(document.createTextNode(text.slice(cursor, position)));
    }
    const mark = document.createElement("mark");
    mark.textContent = match[0];
    container.append(mark);
    cursor = position + match[0].length;
  }

  if (cursor < text.length) {
    container.append(document.createTextNode(text.slice(cursor)));
  }
}

async function loadSearchIndex() {
  if (!searchIndexPromise) {
    searchIndexPromise = fetch("./search-index.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Search index request failed with status ${response.status}.`);
        }
        return response.json();
      })
      .then((pages) => {
        if (!Array.isArray(pages) || pages.some((page) => typeof page.text !== "string" || !Number.isInteger(page.page) || !Number.isInteger(page.chapter))) {
          throw new Error("The book search index is invalid.");
        }
        searchIndex = pages;
        if (searchInput.value.trim().length >= 2) {
          renderPageSearchResults(searchInput.value);
        }
        return pages;
      })
      .catch((error) => {
        searchIndexPromise = null;
        searchStatus.textContent = "Book search could not load. Check your connection and try again.";
        console.error("Unable to load the book search index.", error);
        return null;
      });
  }

  return searchIndexPromise;
}

function openSearch() {
  if (!searchDialog.open) {
    searchDialog.showModal();
  }
  searchInput.focus();
  loadSearchIndex();
}

function changeTheme() {
  const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = nextTheme;
  document.getElementById("theme-button").setAttribute(
    "aria-label",
    nextTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"
  );
  document.querySelector('meta[name="theme-color"]').content = nextTheme === "dark" ? "#101725" : "#f7f8fc";
}

document.getElementById("full-book-button").addEventListener("click", openFullBook);
document.getElementById("reader-home-button").addEventListener("click", () => showHome());
document.getElementById("start-reading-button").addEventListener("click", () => openChapter(0));
document.getElementById("explore-chapters-button").addEventListener("click", () => {
  document.getElementById("chapter-section").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
previousButton.addEventListener("click", () => openChapter(activeChapter - 1));
nextButton.addEventListener("click", () => openChapter(activeChapter + 1));
previousCard.addEventListener("click", () => openChapter(activeChapter - 1));
nextCard.addEventListener("click", () => openChapter(activeChapter + 1));
menuButton.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("sidebar-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close book contents" : "Open book contents");
});
sidebarScrim.addEventListener("click", closeSidebar);
document.getElementById("header-search-button").addEventListener("click", openSearch);
document.getElementById("sidebar-search-button").addEventListener("click", () => {
  closeSidebar();
  openSearch();
});
document.getElementById("theme-button").addEventListener("click", changeTheme);
document.getElementById("search-close-button").addEventListener("click", () => searchDialog.close());

searchInput.addEventListener("input", () => {
  renderPageSearchResults(searchInput.value);
});

searchDialog.addEventListener("close", () => {
  searchInput.value = "";
  searchResults.replaceChildren();
  searchStatus.textContent = "Search chapter titles and the full text of the book.";
});

searchDialog.addEventListener("keydown", (event) => {
  const results = [...searchResults.querySelectorAll(".search-result")];
  if (!results.length) {
    return;
  }

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    selectedSearchResult = selectedSearchResult < 0
      ? direction > 0 ? 0 : results.length - 1
      : (selectedSearchResult + direction + results.length) % results.length;
    results.forEach((result, index) => {
      result.setAttribute("aria-selected", String(index === selectedSearchResult));
    });
    results[selectedSearchResult].scrollIntoView({ block: "nearest" });
  } else if (event.key === "Enter" && selectedSearchResult >= 0) {
    event.preventDefault();
    results[selectedSearchResult].click();
  }
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLocaleLowerCase() === "k") {
    event.preventDefault();
    openSearch();
  } else if (event.key === "/" && !searchDialog.open && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    openSearch();
  }
});

window.addEventListener("popstate", syncRoute);
window.addEventListener("hashchange", syncRoute);
syncRoute();
