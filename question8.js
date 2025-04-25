// Fråga 8.  (4p)
// Hämta todo-data från denna url: https://jsonplaceholder.typicode.com/todos/
// Använd fetch och async/await, samt felhantering medd try/catch.
// Använd valfri metod för att begränsa antalet todo-objekt till 20 (utan att ändra i url).
// Använd filter för att filtrera ut de  todo-objekten som har completed: true.
// Rendera ut vardera objekts 'title' i ul-elementet med id "todoList"

// Din kod här:
async function fetchData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);

    const filteredData = data
      .splice(0, 20)
      .filter((data) => data.completed === true);

    console.log(filteredData);
    return filteredData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

async function renderData() {
  const todoList = document.getElementById("todoList");
  const data = await fetchData();

  todoList.innerHTML = data.map((todo) => `<li>${todo.title}</li>`).join(" ");
}

// fetchData();
renderData();

// Test
// En renderad ul-lista ska visas i index.html enligt följande:
// ‧ et porro tempora
// ‧ quo adipisci enim quam ut ab
// ‧ illo est ratione doloremque quia maiores aut
// ‧ vero rerum temporibus dolor
// ‧ ipsa repellendus fugit nisi
// ‧ repellendus sunt dolores architecto voluptatum
// ‧ ab voluptatum amet voluptas
// ‧ accusamus eos facilis sint et aut voluptatem
// ‧ quo laboriosam deleniti aut qui
// ‧ molestiae ipsa aut voluptatibus pariatur dolor nihil
// ‧ ullam nobis libero sapiente ad optio sint
