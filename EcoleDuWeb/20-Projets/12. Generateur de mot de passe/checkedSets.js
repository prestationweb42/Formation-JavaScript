//
function checkedSets() {
    const checkedSets = [];
    checkboxes.forEach(
        (checkbox) =>
            checkbox.checked && checkedSets.push(charactersSet[checkbox.id])
    );
    return checkedSets;
}
