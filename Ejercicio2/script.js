function checkStickers() {
    const CantidadSticker1 = parseInt(document.querySelector("#CantidadSticker1").value);
    const CantidadSticker2 = parseInt(document.querySelector("#CantidadSticker2").value);
    const CantidadSticker3 = parseInt(document.querySelector("#CantidadSticker3").value);
    
    const totalStickers = CantidadSticker1 + CantidadSticker2 + CantidadSticker3;
    
    if (totalStickers <= 10) {
      document.querySelector("#result").textContent = `Llevas ${totalStickers} stickers.`;
    } else {
      document.querySelector("#result").textContent = "Llevas demasiados stickers.";
    }
  }