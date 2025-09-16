function runAll() {
      const s = document.getElementById("string").value;
      if (!s) {
        alert("Please enter a string first!");
        return;
      }

      // --- Not in Place ---
      document.getElementById("out-indexof").textContent = s.indexOf(document.getElementById("arg-indexof").value);
      document.getElementById("out-charat").textContent = s.charAt(parseInt(document.getElementById("arg-charat").value));
      document.getElementById("out-charcodeat").textContent = s.charCodeAt(parseInt(document.getElementById("arg-charcodeat").value));
      document.getElementById("out-concat").textContent = s.concat(document.getElementById("arg-concat").value);
      document.getElementById("out-padstart").textContent = s.padStart(s.length + parseInt(document.getElementById("arg-padstart").value), "-");
      document.getElementById("out-padend").textContent = s.padEnd(s.length + parseInt(document.getElementById("arg-padend").value), "-");
      document.getElementById("out-split").textContent = JSON.stringify(s.split(document.getElementById("arg-split").value));
      document.getElementById("out-slice").textContent = s.slice(
        parseInt(document.getElementById("arg-slice-start").value),
        parseInt(document.getElementById("arg-slice-end").value)
      );

      // --- In Place ---
      document.getElementById("out-replace").textContent = s.replace(
        document.getElementById("arg-replace1").value,
        document.getElementById("arg-replace2").value
      );

      document.getElementById("out-replaceall").textContent = s.replaceAll(
        document.getElementById("arg-replaceall1").value,
        document.getElementById("arg-replaceall2").value
      );

      let arr = s.split("");
      let removed = arr.splice(
        parseInt(document.getElementById("arg-splice-start").value),
        parseInt(document.getElementById("arg-splice-del").value),
        document.getElementById("arg-splice-insert").value
      ).join("");
      document.getElementById("out-splice").textContent = `Removed: ${removed}, Result: ${arr.join("")}`;

      let orig = "  Pune Institute of Computer Technology  ";
      document.getElementById("out-trim").textContent = orig.trim();
      document.getElementById("out-trimstart").textContent = orig.trimStart();
      document.getElementById("out-trimend").textContent = orig.trimEnd();
    }
