const url = new URL(window.location.href);

if (url.searchParams.get("confetti") !== "true") {
  url.searchParams.set("confetti", "true");
  window.location.replace(url.toString());
}