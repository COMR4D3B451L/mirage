function globalMethods() {
  return {
    enterLine(text) {
        const inputHistory = document.getElementById("input-history");
        const input = document.querySelector("input");
        const newElement = document.createElement("div");
        const ansElement = document.createElement("div");
        const fragment = document.createDocumentFragment();
        const cursorWidth = 0;
      
        newElement.innerHTML = `C:\\Users\\basil>${text}`;
        fragment.appendChild(ansElement);

        function getCommand(cmd) {
            const br = document.createElement("br");
            ansElement.innerHTML = cmd;
            fragment.appendChild(ansElement);
            fragment.appendChild(br);
        }
      
        if (!text) {
            inputHistory.appendChild(newElement);
          } else {
            inputHistory.appendChild(newElement);
            switch (text) {
              case "--skills":
                getCommand('Test');
                break;
              case "help":
                getCommand('Coming Soon');
                break;
              default:
                const error = `'${text}' is not recognized as an internal or external command.`;
                ansElement.innerHTML = error;
                fragment.appendChild(newElement);
                fragment.appendChild(ansElement);
                fragment.appendChild(br);
                break;
            }
            inputHistory.appendChild(fragment);
          }
        input.style.width = `${cursorWidth}ch`;
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

      document.addEventListener("keyup", function(event) {
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