 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'right'
    });
  });
