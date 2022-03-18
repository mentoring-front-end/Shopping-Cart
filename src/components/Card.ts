const fs = require('fs');
const json_data = require('../../dummy.json');

fs.readFile(json_data, 'utf8', function (err, data) {
  try {
    const data = JSON.parse(data);
    for (let i in data){
      () => {
        return (
          <div>
            <article class="card">
              <div class="card__header">
                <figure class="card__figure">
                  <img src="../assets/bed__cover.png" alt="dummy" class="card__image">
                </figure>
              </div>
              <div class="card__body">
                <h2 class="card__title">{data[i].title}</h2>
                <p class="card__price">{data[i].price}</p>
              </div>
              <footer class="card__footer">
                <div class="card__actions">
                  <button type="submit" class="btn">Add to Cart</button>
                </div>
              </footer>
            </article>
          </div>
        )
      }
    // console.log('Name:',data[i].name)
    }
  } catch (e) {
    console.log("Try again")
  }
});