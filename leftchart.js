$(document).ready(function() {
    $('#table_display').DataTable( {
        data: tabledata,
        columns: [
            { title: "城市" },
            { title: '复工指数'},
            { title: '缺工指数'}
        ],
        paging: false,
        scrollY: 550
    } );
} );