document.getElementById("downloadAndroidBtn").addEventListener("click", function() {
    const apkUrl = "https://github.com/majomenoh/ejecutable-LM/raw/main/app-release.apk";
    iniciarDescarga(apkUrl);
    document.getElementById("message").textContent = "✅ Descarga de la versión para Android iniciada. Revisa tu carpeta de descargas.";
});

document.getElementById("downloadWindowsBtn").addEventListener("click", function() {
    const exeUrl = "https://github.com/majomenoh/ejecutable-LM/raw/main/Release.rar";
    iniciarDescarga(exeUrl);
    document.getElementById("message").textContent = "✅ Descarga de la versión para Windows iniciada. Revisa tu carpeta de descargas.";
});

function iniciarDescarga(url) {
    window.open(url, "_blank"); 
