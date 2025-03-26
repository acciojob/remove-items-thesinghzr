function removeColor() {
    let select = document.getElementById("colorSelect");

    if (select.options.length > 0 && select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}
