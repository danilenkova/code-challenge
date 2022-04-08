const petsList = document.querySelector('.pets__list');

const buildPetsList = () => {
  fetch('https://api.jsonbin.io/b/62498395d96a510f028fde92')
    .then(response => response.json())
    .then(({ pets }) => {
      pets.map(pet => {
        if (pet.age % 12 === 0) {
          pet.age = pet.age / 12;
          return pet.age;
        } else {
          pet.age = (pet.age / 12).toFixed(1);
          return pet.age;
        }
      });
      const card = pets
        .map(pet => {
          const label = pet.age === 1 ? 'year' : 'years';
          return `
            <li class="pets__item">
            <img src="${pet.image}" alt="${pet.name}" class="pet__image" />
            <div class="pet__description">
            <h3 class="pet__name">${pet.name}</h3>
            <div class="pet__info">
            <div class="pet__age">
            <p>${pet.age} ${label}</p>
            </div>
            <div class="pet__location">
            <img src="./images/location-marker.svg" alt="marker" />
            <p>${pet.city}, ${pet.state}</p>
            </div>
            </div>
            </div>
            </li>`;
        })
        .join('');
      petsList.insertAdjacentHTML('beforeend', card);
    });
};

buildPetsList();
