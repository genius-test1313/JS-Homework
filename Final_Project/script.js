document.addEventListener('DOMContentLoaded', () => {
    const charactersSection = document.getElementById('characters');

    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.className = 'character';
                characterDiv.innerHTML = `
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                    <div class="character-info">
                        <p><strong>Actor:</strong> ${character.actor}</p>
                        <p><strong>House:</strong> ${character.house}</p>
                        <p><strong>Birth:</strong> ${character.dateOfBirth}</p>
                    </div>
                `;
                charactersSection.appendChild(characterDiv);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
