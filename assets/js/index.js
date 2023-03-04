function globalMethods() {
  return {
    enterLine(text) {
      var newElement = document.createElement("div");
      newElement.innerHTML = "C:\\Users\\basil>" + text;
      document.getElementById("input-history").appendChild(newElement);
      document.querySelector("input").style.width = 0 + "ch";
      error = text + " is not recognized as an internal or external command."
      var errorElement = document.createElement("div");
      errorElement.innerHTML = error;
      document.getElementById("input-history").appendChild(errorElement);
      var br = document.createElement("br");
      document.getElementById("input-history").appendChild(br);
      
    },

    index() {
      window.addEventListener("load", function () {
        document.querySelector("input").style.width = 0 + "ch";
      });

      var input = document.getElementById("my-Input");
      var cursor_caret = document.getElementById("cursor-caret");

      input.focus();
      input.select();
      var input = document.querySelector("input");
      input.addEventListener("input", resizeInput);
      resizeInput.call(input);

      function resizeInput() {
        this.style.width = this.value.length + "ch";
      }

      var mainCmd = document.getElementById("main-cmd-body");
      mainCmd.addEventListener("click", function () {
        cursor_caret.classList.remove("opacity-0");
      });

      document.addEventListener("keydown", function(event) {
        cursor_caret.classList.remove("opacity-0");
        input.focus();
      });

      document.body.onclick = function (e) {
        if (e.target != mainCmd) {
          cursor_caret.classList.toggle("opacity-0");
        }
      };
    },
  };
}