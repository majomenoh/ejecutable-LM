document.getElementById("downloadAndroidBtn").addEventListener("click", function() {
    const apkUrl = "https://drive.google.com/drive/folders/1V1EszV-lgY0fh1kMl4ggIaJZZMOlIM5i"; 
    window.location.href = apkUrl;
    document.getElementById("message").textContent = "✅ Descarga de la versión para Android iniciada. Revisa tu carpeta de descargas.";
});

document.getElementById("downloadWindowsBtn").addEventListener("click", function() {
    const exeUrl = "https://drive.google.com/drive/folders/1DCWIQM87cN3qwVc_W4FfgTQSNmtJAd9c"; 
    window.location.href = exeUrl;
    document.getElementById("message").textContent = "✅ Descarga de la versión para Windows iniciada. Revisa tu carpeta de descargas.";
});
