
/*
Template Name: Shreyu - Responsive Bootstrap 4 Admin Dashboard
Author: CoderThemes
Version: 1.0.0
Website: https://coderthemes.com/
Contact: support@coderthemes.com
File: Data tables init js
*/


$(document).ready(function() {

    $('#bookinglist').DataTable({
        order: [[ 1, 'asc' ]],
        columnDefs: [ { type: 'num', 'targets': [1] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#checklist-daily').DataTable({
        order: [[ 0, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [0] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#checklist-weekly').DataTable({
        order: [[ 0, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [0] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#checklist-monthly').DataTable({
        order: [[ 0, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [0] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#all-task').DataTable({
        order: [[ 0, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [0] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#open-task1').DataTable({
        order: [[ 0, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [0] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#payment-history').DataTable({
        order: [[ 0, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [0] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#committee-list').DataTable({
        order: [[ 0, 'asc' ]],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#ownership-history').DataTable({
        order: [[ 0, 'desc' ]],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#meeting').DataTable({
        order: [[ 0, 'asc' ]],
        order: [[ 1, 'desc' ]],
        columnDefs: [ { type: 'date', 'targets': [1] } ],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#residents-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    $('#currentowner-datatable').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Default Datatable
    $('#basic-datatable').DataTable({
        "scrollX": true,
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }

        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        },
    });

     // Default Datatable Second tab
     $('#basic-datatable2').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

     // Default Datatable Third tab
     $('#basic-datatable3').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Default Datatable Fourth tab
    $('#basic-datatable4').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Default Datatable Fifth tab
    $('#basic-datatable5').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Default Datatable Sixth tab
    $('#basic-datatable6').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Default Datatable Seventh tab
    $('#basic-datatable7').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Default Datatable Eighth tab
    $('#basic-datatable8').DataTable({
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    //Buttons examples
    var table = $('#datatable-buttons').DataTable({
        lengthChange: false,
        buttons: ['copy', 'print'],
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Multi Selection Datatable
    $('#selection-datatable').DataTable({
        select: {
            style: 'multi'
        },
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    // Key Datatable
    $('#key-datatable').DataTable({
        keys: true,
        "language": {
            "paginate": {
                "previous": "<i class='uil uil-angle-left'>",
                "next": "<i class='uil uil-angle-right'>"
            }
        },
        "drawCallback": function () {
            $('.dataTables_paginate > .pagination').addClass('pagination-rounded');
        }
    });

    table.buttons().container()
            .appendTo('#datatable-buttons_wrapper .col-md-6:eq(0)');
} );