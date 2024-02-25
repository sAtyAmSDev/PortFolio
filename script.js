function OpenBox(img, title,url) {
  var popup = document.getElementById("popup");
  popup.style.display = "block";
  popup.innerHTML = ` <div class="popup-content">
  <span class="close" id="closePopup">&times;</span>
  <div class="text">
    <div class="image">
      <img src="${img}" alt="" />
    </div>
    <div class="contant">
      <p>${title}</p>
      <h1>Web Design Development.</h1>
      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
        ullam rerum eos ipsum magni cum eveniet, illo, optio laborum
        non ducimus, dolores autem assumenda hic!
      </span>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Officiis eius deleniti ullam neque sunt quisquam nemo illo
        praesentium in porro?
      </span>
      <a href="${url}"
        >VIEW PROJECT<i class="fa-solid fa-arrow-right NEXTPOP"></i>
      </a>
    </div>
  </div>
</div>`;
  var closeBtn = document.getElementById("closePopup");
  closeBtn.onclick = function () {
    popup.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };
}
