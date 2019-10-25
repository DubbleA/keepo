function appendTable(tableId, ...args) {
    let table = document.getElementById(tableId);
    let row = document.createElement('tr');
    args.forEach(colData => row.insertAdjacentHTML('beforeend', `<td id="${colData.id||''}" class="${colData.className||''}" style="${colData.styles||''}">${colData.code ? eval(colData.code) : colData.innerHTML||colData}</td>`));
    table.appendChild(row);
}

appendTable('bruh', {className:'text-center',code:'table.childElementCount+1'}, 'Mike', 'StockX', {className:'text-center',innerHTML:2013}, {className:'text-right',innerHTML:'$1,100'}, {className:'text-right',innerHTML: '<button type="button" rel="tooltip" class="btn btn-success btn-link btn-sm btn-icon " data-original-title="Refresh" title=""><i class="tim-icons icon-refresh-01"></i></button><button type="button" rel="tooltip" class="btn btn-danger btn-link btn-sm " data-original-title="Delete" title=""><i class="tim-icons icon-simple-remove"></i></button>'});