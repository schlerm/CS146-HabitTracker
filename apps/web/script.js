// Alex contribution on Nov 22 // 

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('habitAddForm');
    const listContainer = document.getElementById('habitList');

    if (form && listContainer) {
        form.addEventListener('submit', function (event) {
            // note to self- refer to lecture notes //
            event.preventDefault();

            const name = document.getElementById('habitName').value;
            const date = document.getElementById('habitDate').value;
            const Priority = document.getElementById('habitPriority').value;

            const newListItem = document.createElement('li');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';

            const newLabel = document.createElement('label');

            let labelText = name;

            if (date) {
                labelText += `(Due on/must be completed on: ${date})`;
            }

            if (Priority.includes('High')) {
                labelText += `Priority: High - don't procrastinate just do it`;
                newListItem.style.borderLeftColor = 'red';
                //I added this to make it stand out a tad //
                newListItem.style.fontWeight = 'bold';
            } else {
                labelText += ` - ${Priority} Priority`;
            }

            newLabel.textContent = labelText;
            newListItem.appendChild(checkbox);
            newListItem.appendChild(newLabel);
            listContainer.prepend(newListItem);

            form.reset();

        })
    }
});
