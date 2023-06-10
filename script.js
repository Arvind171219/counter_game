function Counter() {
    let counterA = 0;
    let counterB = 0;

    function incrementA() {
      counterA++;
      counterB--;
      updateCounters();
      checkWin();
    }

    function incrementB() {
      counterB++;
      counterA--;
      updateCounters();
      checkWin();
    }

    function updateCounters() {
      document.getElementById('counterA').textContent = counterA;
      document.getElementById('counterB').textContent = counterB;
    }

    function checkWin() {
      if (counterA >= 10) {
        alert("Player A wins!");
        resetCounters();
      } else if (counterB >= 10) {
        alert("Player B wins!");
        resetCounters();
      }
    }

    function resetCounters() {
      counterA = 0;
      counterB = 0;
      updateCounters();
    }

    // Expose increment functions to the global scope
    return {
      increment: {
        A: incrementA,
        B: incrementB
      }
    };
  }

  // Create a counter instance
  var counter = Counter();

  // Function to handle button clicks
  function increment(player) {
    counter.increment[player]();
  }