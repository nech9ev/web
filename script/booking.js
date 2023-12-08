document.getElementById('tableForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var checkInTime = document.getElementById('checkInTime').value;
  var bedType = document.getElementById('bedType').value;
  var checkInDate = document.getElementById('checkInDate').value;
  var checkOutDate = document.getElementById('checkOutDate').value;
  var comments = document.getElementById('comments').value;
  
  var tableHtml = '<table>' +
                  '<tr><th>Время заезда</th><th>Тип кровати</th><th>Дата заезда</th><th>Дата отъезда</th><th>Пожелания</th></tr>' +
                  '<tr><td>' + checkInTime + '</td><td>' + bedType + '</td><td>' + checkInDate + '</td><td>' + checkOutDate + '</td><td>' + comments + '</td></tr>' +
                  '</table>';
  
  document.getElementById('tableContainer').innerHTML = tableHtml;
});

var savedParams = JSON.parse(localStorage.getItem('tableParams'));
if (savedParams) {
  document.getElementById('checkInTime').value = savedParams.checkInTime;
  document.getElementById('bedType').value = savedParams.bedType;
  document.getElementById('checkInDate').value = savedParams.checkInDate;
  document.getElementById('checkOutDate').value = savedParams.checkOutDate;
  document.getElementById('comments').value = savedParams.comments;
}

document.getElementById('tableForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  var checkInTime = document.getElementById('checkInTime').value;
  var bedType = document.getElementById('bedType').value;
  var checkInDate = document.getElementById('checkInDate').value;
  var checkOutDate = document.getElementById('checkOutDate').value;
  var comments = document.getElementById('comments').value;
  
  var tableHtml = '<table>' +
                  '<tr><th>Время заезда</th><th>Тип кровати</th><th>Дата заезда</th><th>Дата отъезда</th><th>Пожелания</th></tr>' +
                  '<tr><td>' + checkInTime + '</td><td>' + bedType + '</td><td>' + checkInDate + '</td><td>' + checkOutDate + '</td><td>' + comments + '</td></tr>' +
                  '</table>';
  
  document.getElementById('tableContainer').innerHTML = tableHtml;
  
  var tableParams = {
    checkInTime: checkInTime,
    bedType: bedType,
    checkInDate: checkInDate,
    checkOutDate: checkOutDate,
    comments: comments
  };
  
  localStorage.setItem('tableParams', JSON.stringify(tableParams));
});
