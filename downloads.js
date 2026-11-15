const platform = navigator.userAgentData?.platform || navigator.platform || "";
const userAgent = navigator.userAgent || "";
const isMobile = navigator.userAgentData?.mobile ||
  /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent) ||
  (/^Mac/i.test(platform) && navigator.maxTouchPoints > 1);

if (!isMobile) {
  const os = /^Win/i.test(platform) ? "windows" :
    /^Mac/i.test(platform) ? "mac" : "";

  if (os) {
    const manual = document.querySelector(`[data-download-platform="${os}"] .download`);
    const recommended = document.querySelector(".recommended-download");
    const primary = recommended.querySelector(".download");
    primary.href = manual.href;
    primary.querySelector(".download-label").textContent =
      os === "mac" ? "Download for Mac" : "Download for Windows";
    recommended.hidden = false;
  }
}
