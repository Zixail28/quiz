export function successSubmitForm(rootEl) {
  rootEl.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("success-form");

  const successIcon = document.createElement("div");
  successIcon.classList.add("success-form__icon");

  successIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
  <g filter="url(#filter0_d_1_878)">
  <circle cx="32" cy="28" r="28" fill="url(#paint0_linear_1_878)"/>
  <path d="M41.625 21.875L29.375 34.125L23.25 28" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
  <filter id="filter0_d_1_878" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_878"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_878" result="shape"/>
  </filter>
  <linearGradient id="paint0_linear_1_878" x1="32" y1="12.8285" x2="32" y2="55.5789" gradientUnits="userSpaceOnUse">
  <stop stop-color="#BDFF6C"/>
  <stop offset="0.93" stop-color="#28CD3F"/>
  </linearGradient>
  </defs>
  </svg>`;
  
  const successTextBox = document.createElement("div");
  successTextBox.classList.add("success-form__text-box");

  const successTextBoxTitle = document.createElement("div");
  successTextBoxTitle.classList.add("success-text-box__title");
  successTextBoxTitle.textContent = "Отлично, спасибо!";
  const successTextBoxDesc = document.createElement("div");
  successTextBoxDesc.textContent = "Мы отправили подборку вам на почту. Если подборка не приходит — проверьте спам, возможно, она попала туда.";
  successTextBoxDesc.classList.add("success-text-box__desc");

  successTextBox.append(successTextBoxTitle, successTextBoxDesc);
  
  container.append(successIcon, successTextBox);

  rootEl.append(container);
}