export function navigateTo(path, params) {
  window.location.assign(
    `http://${window.location.host}/${path}/index.html${params ?? ""}`
  );
}
