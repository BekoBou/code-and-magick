'use strict';

window.renderStatistics = function (ctx, names, times) {
  var startPointX = 100;
  var startPointY = 10;

  // shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(startPointX + 10, startPointY + 10, 420, 270);

  // main block
  ctx.fillStyle = '#fff';
  ctx.fillRect(startPointX, startPointY, 420, 270);

  // text
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', startPointX + 20, 40);
  ctx.fillText('Список результатов:', startPointX + 20, 60);

  // histogram
  var offsetX = 50 + 40;

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  var max = getMaxOfArray(times);

  var histoHeight = 140;
  var histoX = startPointX + 40;
  var step = histoHeight / max;
  var columnIndent = 90;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * time;

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.filter = 'none';
    } else {
      ctx.fillStyle = 'blue';
      ctx.filter = 'saturate(' + Math.random() + ')';
    }

    ctx.fillRect(histoX + columnIndent * i, histoHeight - height + 100, 40, height);

    ctx.fillStyle = '#000';
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, histoHeight - height + 90);
    ctx.fillText(name, startPointX + 40 + offsetX * i, startPointY + 270 - 20);
  }
};
