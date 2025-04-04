document.getElementById("downloadAndroidBtn").addEventListener("click", function() {
    const apkUrl = "C:/Users/Majo/Desktop/paginaAPKLM/apkLM/ANDROID/app-release.apk";
    iniciarDescarga(apkUrl, "LibroMayor.apk");
    document.getElementById("message").textContent = "✅ Descarga de la versión para Android iniciada. Revisa tu carpeta de descargas.";
});

document.getElementById("downloadWindowsBtn").addEventListener("click", function() {
    const exeUrl = "C:/Users/Majo/Desktop/paginaAPKLM/apkLM/WINDOWS/libromayor_frontend.exe"; 
    iniciarDescarga(exeUrl, "LibroMayor.exe");
    document.getElementById("message").textContent = "✅ Descarga de la versión para Windows iniciada. Revisa tu carpeta de descargas.";
});

function iniciarDescarga(url, nombreArchivo) {
    let link = document.createElement("a");
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
