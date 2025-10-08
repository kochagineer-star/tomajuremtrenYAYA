// ====== ロード時フェードイン専用 ======

// JSが読み込まれた確認
console.log("script.js 読み込まれたよ！");

window.addEventListener("load", () => {
  const img = document.querySelector(".profile-img"); // プロフィール画像を取得
  if (img) {
    console.log("プロフィール画像見つかった！");
    // 0.1秒遅れてアニメーション開始（自然に見せるため）
    setTimeout(() => {
      img.classList.add("show");
    }, 100);
  } else {
    console.log("プロフィール画像が見つからなかった…");
  }
});

