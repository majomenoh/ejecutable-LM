document.getElementById("downloadAndroidBtn").addEventListener("click", function() {
    const apkUrl = "https://raw.githubusercontent.com/majomenoh/ejecutable-LM/main/app-release.apk"; // URL real del APK
    iniciarDescarga(apkUrl, "LibroMayor.apk");
    document.getElementById("message").textContent = "✅ Descarga de la versión para Android iniciada. Revisa tu carpeta de descargas.";
});

document.getElementById("downloadWindowsBtn").addEventListener("click", function() {
    const exeUrl = "https://raw.githubusercontent.com/majomenoh/ejecutable-LM/main/Release.rar"; // URL real del RAR
    iniciarDescarga(exeUrl, "LibroMayor.rar");
    document.getElementById("message").textContent = "✅ Descarga de la versión para Windows iniciada. Revisa tu carpeta de descargas.";
});

function iniciarDescarga(url, nombreArchivo) {
    let link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", nombreArchivo);
    link.setAttribute("target", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}