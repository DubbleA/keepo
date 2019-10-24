function appendTable(...args) {
    let table = document.getElementById('bruh');
    let newRow = document.createElement('tr');
    args.forEach(colData => {
        // if (typeof colData == 'object') {
        //     var className = colData.class;
        //     var styles = colData.styles;
        //     var id = colData.id;
        //     colData = colData.innerHTML;
        // }
        // "JuSt CoMmEnT It OuT" - Retard
        // "Push to github, do it just incase" - Retard
        newRow.insertAdjacentHTML('beforeend', `<td id="${colData.id||''}" class="${colData.className||''}" style="${colData.styles||''}">${colData.innerHTML||colData}</td>`);
    });
    table.appendChild(newRow);
    // table.insertAdjacentHTML('beforeend',
    // `<tr id="${'aaa'}">
    //     <td class="text-center">${table.childElementCount+1}<td>
    //     <td>${name}</td>
    //     <td>${site}</td>
    //     <td class="text-center">${lastRefresh}</td>
    //     <td class="text-right">${totalSales}</td>
    //     <td class="text-right">
    //         <button type="button" rel="tooltip" class="btn btn-success btn-link btn-sm btn-icon " data-original-title="Refresh" title=""><i class="tim-icons icon-refresh-01"></i></button>
    //         <button type="button" rel="tooltip" class="btn btn-danger btn-link btn-sm " data-original-title="Delete" title=""><i class="tim-icons icon-simple-remove"></i></button>
    //     </td>
    // </tr>`);
}
