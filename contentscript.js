const TIMER = 3000;

function roundedNumber(number) {
  return Math.round(number * 100) / 100;
}

function findByText(el, searchText) {
  var found;

  for (const e of el) {
    if (e.textContent.includes(searchText)) {
      found = e;
      break;
    }
  }

  return found.parentElement.parentElement;
}

function dailyROI() {
  const ONE_TABLE_WRAPPER = findByText(document.querySelectorAll(".MuiTypography-root.MuiTypography-h5"), "Bond (1,1)"); // 1,1 bond
  const FOUR_TABLE_WRAPPER = findByText(document.querySelectorAll(".MuiTypography-root.MuiTypography-h5"), "Bond (4,4)"); // 4,4 bond
  const REBASE_PERC = (FOUR_TABLE_WRAPPER.querySelector(".MuiTypography-root.MuiTypography-body2").innerText.replace(/\D/g, "") / 100) / 12; // Rebase % (every 8 hours)

  const ONE_HEADER_ROW_PRICE = ONE_TABLE_WRAPPER.querySelectorAll("th")[2];
  const FOUR_HEADER_ROW_PRICE = FOUR_TABLE_WRAPPER.querySelectorAll("th")[2];

  const HEADER_HTML = `<th class="MuiTableCell-root MuiTableCell-head MuiTableCell-alignLeft" scope="col">DAILY ROI <br />(with rebase)</th>`;
  const ONE_TABLE_ROWS = ONE_TABLE_WRAPPER.querySelectorAll(".MuiTableRow-root");
  const FOUR_TABLE_ROWS = FOUR_TABLE_WRAPPER.querySelectorAll(".MuiTableRow-root");

  // Insert Header to 1,1 bond
  ONE_HEADER_ROW_PRICE.insertAdjacentHTML("afterend", HEADER_HTML);

  // Insert daily ROI into 1,1 bonds
  ONE_TABLE_ROWS.forEach(index => {
    if (index.querySelector(".MuiTableCell-root").innerText !== "Bond") { // Skip the header
      const TEXT = index.children[2];
      const CURRENT_ROI = TEXT.innerText.replace(/\D/g, "") / 100;
      const DAILY_ROI =  roundedNumber((CURRENT_ROI / 5));
      const DAILY_ROI_REBASE = roundedNumber((REBASE_PERC * 3));
      const ROW_HTML = `<td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${roundedNumber((DAILY_ROI + DAILY_ROI_REBASE))}%</td>`;

      TEXT.insertAdjacentHTML("afterend", ROW_HTML);
    }
  });

  // Insert Header to 4,4 bond
  FOUR_HEADER_ROW_PRICE.insertAdjacentHTML("afterend", HEADER_HTML);

  // Insert daily ROI into 4,4 bonds
  FOUR_TABLE_ROWS.forEach(index => {
    if (index.querySelector(".MuiTableCell-root").innerText !== "Bond") { // Skip the header
      const TEXT = index.children[2];
      const CURRENT_ROI = TEXT.childNodes[0].nodeValue.replace(/\D/g, "") / 100;
      console.log(CURRENT_ROI)
      const DAILY_ROI =  roundedNumber((CURRENT_ROI / 4));
      const ROW_HTML = `<td class="MuiTableCell-root MuiTableCell-body MuiTableCell-alignLeft">${DAILY_ROI}%</td>`;

      TEXT.insertAdjacentHTML("afterend", ROW_HTML);
    }
  });
}

function main () {
  dailyROI();
}

// Hector DAO dynamically loads some data, we need to wait for the page to be fully loaded
setTimeout(main, TIMER);